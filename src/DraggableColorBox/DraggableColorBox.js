import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./DraggableColorBoxStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const DraggableColorBox = props => {
  const { classes, color, colorName, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{colorName}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
