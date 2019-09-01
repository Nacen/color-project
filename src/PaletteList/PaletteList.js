import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "../styles/PaletteListStyles";
import MiniPalette from "../MiniPalette/MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class PaletteList extends Component {
  goToPalette = id => {
    return this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">Create A Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  handleDelete={() => deletePalette(palette.id)}
                  key={palette.id}
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
