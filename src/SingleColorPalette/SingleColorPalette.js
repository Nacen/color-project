import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";
import styles from '../styles/SingleColorPaletteStyles';


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
    const { colorId, classes } = this.props;
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
      <div className={classes.singleColorPalette}>
        <Navbar
          hasLevel={false}
          format={this.state.format}
          changeFormat={this.changeFormat}
        />
        <h1>Single Color Palette</h1>
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
