import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root:{
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    border: "1px solid black",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "grey"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    margin: "0.5rem",
    fontSize: "1.5rem" 
  }
};

const MiniPalette = ({ classes, paletteName, emoji }) => {
  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
