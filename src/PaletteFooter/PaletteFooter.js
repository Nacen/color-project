import React from "react";
import Footer from "../Footer/Footer";
import './PaletteFooter.css';

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <Footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </Footer>
  );
};

export default PaletteFooter;
