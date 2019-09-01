import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";
import { withStyles } from '@material-ui/styles';
import styles from '../styles/DraggableColorListStyles'

const DraggableColorList = SortableContainer(({ colors, deleteColor, classes }) => {
  return (
    <div className={classes.root}>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          handleClick={() => deleteColor(color.name)}
          key={color.name}
          color={color.color}
          colorName={color.name}
        />
      ))}
    </div>
  );
});

export default withStyles(styles)(DraggableColorList);
