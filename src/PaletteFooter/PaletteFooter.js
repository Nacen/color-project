import React from "react";
import Footer from "../Footer/Footer"; 
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteFooterStyles';

const PaletteFooter = ({ paletteName, emoji, classes }) => {
  return (
    <Footer className={classes.paletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </Footer>
  );
};

export default withStyles(styles)(PaletteFooter);
