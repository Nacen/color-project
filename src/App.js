import React from "react";
import Pallete from "./Palette/Palette";
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';

import "./App.css";

function App() {
  console.log(generatePalette(seedColors[4]))
  return (<div className="App">
      <Pallete {...seedColors[3]} />
    </div>);
}

export default App;
