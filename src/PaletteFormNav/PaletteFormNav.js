import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "../styles/PaletteFormNavStyles";
import PaletteMetaForm from "../PaletteMetaForm/PaletteMetaForm";

const PaletteFormNav = ({
  open,
  handleDrawerOpen,
  handleSave,
  setPaletteName,
  paletteName,
  palettes
}) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  function handleClickOpenDialog() {
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
    return () => {
      ValidatorForm.removeValidationRule("isPaletteNameUnique");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            Create a Palette
          </Typography>

          {/* <Button variant="contained" color="primary" onClick={handleSave}>
            Save Palette
          </Button> */}
        </Toolbar>
        <div className={classes.navButtons}>
          <PaletteMetaForm
            handleSave={handleSave}
            setPaletteName={setPaletteName}
            paletteName={paletteName}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpenDialog}
          >
            Save Palette
          </Button>
        </div>
      </AppBar>
    </React.Fragment>
  );
};

export default PaletteFormNav;
