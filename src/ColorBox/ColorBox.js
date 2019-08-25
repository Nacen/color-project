import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";


const styles = {
  colorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "40%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: "1",
      transition: "0.3s"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "#000",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  textColor: {
    color: props =>
      chroma(props.background).luminance() >= 0.6
        ? "rgba(0, 0, 0, 0.7)"
        : "white"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "#fff" : "#000"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.6)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.7)"
        : "white",
    position: "absolute",
    width: "100px",
    height: "30px",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    lineHeight: "30px",
    textAlign: "center",
    opacity: "0",
    background: "rgba(255, 255, 255, 0.3)",
    outline: "none",
    border: "none",
    textTransform: "uppercase",
    cursor: "pointer"
  },
  copyOverlay: {
    opacity: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    transition: "transform 0.45s ease-in-out"
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute"
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "3rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "#fff",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px #000",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      textTransform: "uppercase"
    },
    "& p": {
      fontSize: "2rem"
    }
  },
  showCopyMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "15",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.2s"
  }
};

class ColorBox extends Component {
  state = {
    copied: false
  };

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const {
      background,
      name,
      paletteId,
      colorId,
      showingFullPalette,
      classes
    } = this.props;
    const { copied } = this.state;

    const link = (
      <Link
        to={`/palette/${paletteId}/${colorId}`}
        onClick={evt => evt.stopPropagation()}
      >
        <span className={classes.seeMore}>More</span>
      </Link>
    );

    return (
      <CopyToClipboard onCopy={this.changeCopyState} text={background}>
        <div
          className={classes.colorBox}
          style={{ backgroundColor: background }}
        >
          <div
            style={{ backgroundColor: background }}
            className={`${classes.copyOverlay} ${copied &&
              classes.showOverlay}`}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
            <h1 className={classes.textColor}>Copied!</h1>
            <p className={classes.textColor}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.textColor}>{name}</span>
            </div>
            <button className={`${classes.copyButton} ${classes.textColor}`}>
              Copy
            </button>
          </div>
          {showingFullPalette ? link : ""}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
