import React from 'react'
import { withStyles } from '@material-ui/styles';
import styles from './DraggableColorBoxStyles';

const DraggableColorBox = (props) => {
  const { classes, color, colorName} = props;
  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      {colorName}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox)
