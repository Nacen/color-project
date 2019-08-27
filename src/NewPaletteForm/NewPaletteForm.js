import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../styles/SideDrawerStyles";
import { arrayMove } from "react-sortable-hoc";

import DraggableColorList from "../DraggableColorList/DraggableColorList";
import PaletteFormNav from "../PaletteFormNav/PaletteFormNav";

const NewPaletteForm = props => {
  const defaultPaletteLength = props.paletteLength ? props.paletteLength : 20;

  const { palettes, history, savePalette, children } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  const [colorName, setColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("purple");
  const [newPaletteName, setNewPaletteName] = useState("");
  const isPaletteFull = defaultPaletteLength === colors.length;

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    // ValidatorForm.addValidationRule("isColorValueUnique", value =>
    //   colors.every(({ value }) => {
    //     console.log(value);
    //     console.log(currentColor);
    //     return value !== currentColor;
    //   })
    // );
    return () => {
      ValidatorForm.removeValidationRule("isColorNameUnique");
      // ValidatorForm.removeValidationRule("isColorValueUnique");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const addColor = (currentColor, colorName) => {
    setColors([...colors, { color: currentColor, name: colorName }]);
    setColorName("");
  };

  const goBack = () => history.push("/");

  const handleSavePalette = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: colors
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

  const clearPalette = () => setColors([]);

  const getRandomColor = () => {
    const colors = palettes.map(palette => palette.colors).flat();
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
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
          <h1>New Color Palette Form</h1>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.formContainer}>
          <div className={classes.newPaletteForm}>
            <Typography variant="h4">Design your Palette</Typography>
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
            <ChromePicker
              color={currentColor}
              onChangeComplete={newColor => setCurrentColor(newColor.hex)}
            />
            <ValidatorForm onSubmit={() => addColor(currentColor, colorName)}>
              <TextValidator
                style={{ minWidth: "100%" }}
                label="New Color"
                value={colorName}
                onChange={evt => setColorName(evt.target.value)}
                name="New Color Name"
                validators={[
                  "required",
                  "isColorNameUnique"
                  // "isColorValueUnique"
                ]}
                errorMessages={[
                  "This field is required",
                  "Color name already exist"
                  // "Color already exist"
                ]}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: isPaletteFull
                    ? "rgba(0, 0, 0, 0.12)"
                    : currentColor
                }}
                className={classes.addColorButton}
                disabled={isPaletteFull}
              >
                {isPaletteFull ? "Palette Full" : "Add Color"}
              </Button>
            </ValidatorForm>
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
        />

        {children}
      </main>
    </div>
  );
};

export default NewPaletteForm;
