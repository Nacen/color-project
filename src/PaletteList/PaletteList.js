import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PaletteList.css";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>PaletteList</h1>
        {palettes.map(palette => (
          <Link to={`/palette/${palette.id}`}>
            <h1>{palette.paletteName}</h1>
          </Link>
        ))}
      </div>
    );
  }
}

export default PaletteList;