import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";

import "./ColorBox.css";

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
    const { background, name, paletteId, colorId, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.55;

    const darkText = isLightColor ? "dark-text" : "";

    const link = (
      <Link
        to={`/palette/${paletteId}/${colorId}`}
        onClick={evt => evt.stopPropagation()}
      >
        <span className={`see-more ${darkText}`}>More</span>
      </Link>
    );
    return (
      <CopyToClipboard onCopy={this.changeCopyState} text={background}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div
            style={{ backgroundColor: background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={`${darkText}`}>Copied!</h1>
            <p className={`${darkText}`}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? "light-text" : ""}>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {showLink ? link : ""}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
