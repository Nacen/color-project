import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import "./SingleColorPalette.css";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../Navbar/Navbar";
import PaletteFooter from "../PaletteFooter/PaletteFooter";

const styles = {
  singleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "90%"
  },

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
  goBack: {
    background: "black",
    width: "20%",
    height: "40%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    "& a": {
      textDecoration: "none",
      color: "white",
      position: "absolute",
      width: "100px",
      height: "30px",
      display: "inline-block",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      lineHeight: "30px",
      textAlign: "center",
      background: "rgba(255, 255, 255, 0.3)",
      outline: "none",
      border: "none",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }
};

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
