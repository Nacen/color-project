import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from '../styles/ColorBoxStyles';
import { withStyles } from "@material-ui/styles";

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
