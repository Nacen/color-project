import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

import PaletteFooter from '../PaletteFooter/PaletteFooter';
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import styles from "../styles/PaletteStyles";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeLevel = level => {
    this.setState({ level: level });
  };

  changeFormat = evt => {
    this.setState({ format: evt.target.value });
  };

  render() {
    const { colors, id, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const { classes } = this.props;
    const colorBoxes = colors[level].map((color, index) => {
      return (
        <ColorBox
          key={color.id}
          background={color[format]}
          name={color.name}
          colorId={color.id}
          paletteId={id}
          showingFullPalette={true}
        />
      );
    });
    return (
      <div className={classes.palette}>
        <Navbar
          format={format}
          changeFormat={this.changeFormat}
          level={level}
          changeLevel={this.changeLevel}
          hasLevel={true}
        />
        <div className={classes.paletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
