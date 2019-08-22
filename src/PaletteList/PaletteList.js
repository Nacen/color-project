import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PaletteList.css";
import MiniPalette from "../MiniPalette/MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>PaletteList</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
