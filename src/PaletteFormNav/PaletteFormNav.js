import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../styles/SideDrawerStyles";

const PaletteFormNav = ({
  handleSave,
  open,
  handleDrawerOpen,
  setPaletteName,
  paletteName,
  palettes
}) => {
  const classes = useStyles();

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
    return () => {
      ValidatorForm.removeValidationRule("isPaletteNameUnique");
    };
  }, []);

  return (
    <React.Fragment>
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
          <ValidatorForm onSubmit={() => handleSave()}>
            <TextValidator
              label="Palette Name"
              value={paletteName}
              onChange={evt => setPaletteName(evt.target.value)}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette Name",
                "Palette Name Already Exist"
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Go Back
              </Button>
            </Link>
          </ValidatorForm>
          {/* <Button variant="contained" color="primary" onClick={handleSave}>
            Save Palette
          </Button> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default PaletteFormNav;
