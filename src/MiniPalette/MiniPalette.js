import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = ({
  classes,
  paletteName,
  colors,
  emoji,
  goToPalette,
  openDialog,
  id
}) => {
  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const confirmDelete = evt => {
    evt.stopPropagation();
    openDialog(id);
  };

  const handleClick = () => goToPalette(id);

  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.delete} onClick={confirmDelete}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
        />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
