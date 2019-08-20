import React, { Component } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class ColorBox extends Component {
  state = {
    copied: false

  }

  changeCopyState = () => {
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500);
    })
  }

  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard onCopy={this.changeCopyState} text={background}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div style={{ backgroundColor: background }} className={`copy-overlay ${copied && "show"}`} />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
