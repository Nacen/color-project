import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./SingleColorPalette.css";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";

class SingleColorPalette extends Component {
  state = {
    format: "hex"
  };

  gatherShades = (colors, colorId) => {
    let shades = [];
    for (let color in colors) {
      shades.push(
        ...colors[color].filter(shadeColor => shadeColor.id === colorId)
      );
    }
    return shades.slice(1);
  };

  changeFormat = evt => {
    this.setState({ format: evt.target.value });
  };

  render() {
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { colorId } = this.props;
    const { format } = this.state;
    const colorBoxes = this.gatherShades(colors, colorId).map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className="Palette SingleColorPalette">
        <Navbar
          hasLevel={false}
          format={this.state.format}
          changeFormat={this.changeFormat}
        />
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">
          {colorBoxes}
          <div className="SinglePalette-go-back ColorBox">
            <Link className="back-button go-back" to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
