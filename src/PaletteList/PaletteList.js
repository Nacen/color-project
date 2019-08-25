import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import styles from "../styles/PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";

class PaletteList extends Component {
  goToPalette = id => {
    console.log(id);
    return this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create A Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              <MiniPalette
                key={palette.id}
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
