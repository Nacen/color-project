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

import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";

const SideDrawer = props => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState([
    { color: "purple", name: "Purple" },
    { color: "#e15764", name: "Coral" }
  ]);
  const [colorName, setColorName] = useState("");
  const [currentColor, setCurrentColor] = useState("purple");

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
      ValidatorForm.removeValidationRule("isColorValueUnique");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const addColor = () =>
    setColors([...colors, { color: currentColor, name: colorName }]);

  const goBack = () => props.history.push("/");

  const handleSavePalette = () => {
    let newName = "New Test Palette"
    const newPalette = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
      colors: colors
    };
    props.savePalette(newPalette);
    goBack();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Color Palette
          </Typography>
          <Button variant="contained" color="secondary" onClick={goBack}>
            Go Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSavePalette}
          >
            Save Palette
          </Button>
        </Toolbar>
      </AppBar>
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
              <Button variant="contained" color="secondary">
                Clear Palette
              </Button>
              <Button variant="contained" color="primary">
                Random Color
              </Button>
            </div>
            <ChromePicker
              color={currentColor}
              onChangeComplete={newColor => setCurrentColor(newColor.hex)}
            />
            <ValidatorForm onSubmit={addColor}>
              <TextValidator
                label="New Color"
                value={colorName}
                onChange={evt => setColorName(evt.target.value)}
                name="color name"
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
                style={{ backgroundColor: currentColor }}
                className={classes.addColorButton}
              >
                Add Color
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

        {colors.map(color => (
          <DraggableColorBox
            key={color.name}
            color={color.color}
            colorName={color.name}
          />
        ))}

        {props.children}
      </main>
    </div>
  );
};

export default SideDrawer;
