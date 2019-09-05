import React, { useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import useStyles from "../styles/NewPaletteFormStyles";
import { arrayMove } from "react-sortable-hoc";
import seedColors from "../seedColors";

import DraggableColorList from "../DraggableColorList/DraggableColorList";
import PaletteFormNav from "../PaletteFormNav/PaletteFormNav";
import ColorPicker from "../ColorPicker/ColorPicker";

const NewPaletteForm = props => {
  const defaultPaletteLength = props.paletteLength ? props.paletteLength : 20;
  const { palettes, history, savePalette } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(seedColors[0].colors);
  const [colorName, setColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("purple");
  const [newPaletteName, setNewPaletteName] = useState("");
  const isPaletteFull = defaultPaletteLength === colors.length;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const addColor = (currentColor, colorName) => {
    setColors([...colors, { name: colorName, color: currentColor }]);
    setColorName("");
  };

  const goBack = () => history.push("/");

  const handleSavePalette = emoji => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors,
      emoji: emoji
    };
    savePalette(newPalette);
    goBack();
  };

  const deleteColor = name => {
    setColors(colors.filter(color => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const clearPalette = () => {
    setColors([]);
    setColorName("");
  };

  const getRandomColor = () => {
    const paletteColors = seedColors.map(palette => palette.colors).flat();
    let random;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      random = Math.floor(Math.random() * paletteColors.length);
      randomColor = paletteColors[random];
      // eslint-disable-next-line no-loop-func
      isDuplicateColor = colors.some(color => color.name === randomColor.name);
    }
    addColor(randomColor.color, randomColor.name);
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        setPaletteName={setNewPaletteName}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleSave={handleSavePalette}
        palettes={palettes}
        paletteName={newPaletteName}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.formContainer}>
          <div className={classes.newPaletteForm}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Design your Palette
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="secondary"
                onClick={clearPalette}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={isPaletteFull}
                onClick={getRandomColor}
              >
                Random Color
              </Button>
            </div>
            <ColorPicker
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              addColor={addColor}
              colorName={colorName}
              setColorName={setColorName}
              isPaletteFull={isPaletteFull}
              colors={colors}
            />
          </div>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          axis="xy"
          colors={colors}
          deleteColor={deleteColor}
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
