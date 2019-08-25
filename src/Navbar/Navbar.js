import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import {withStyles} from '@material-ui/styles';
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import styles from '../styles/NavbarStyles';

class Navbar extends Component {
  state = {
    open: false
  };

  closeSnackBar = () => {
    this.setState({ open: false });
  };

  handleChangeFormat = evt => {
    this.props.changeFormat(evt);
    this.setState({ open: true });
  };

  render() {
    const { open } = this.state;
    const { level, changeLevel, format, hasLevel, classes } = this.props;
    return (
      <header className={classes.navbar}>
        <div className={classes.navbarLogo}>
          <Link to="/">React Color Picker</Link>
        </div>
        {hasLevel && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select onChange={this.handleChangeFormat} value={format}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);

// hex
// rgb
// rgba
