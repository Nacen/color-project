import React from "react";
import Pallete from "./Palette/Palette";
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';

import "./App.css";

function App() {
  return (<div className="App">
      <Pallete palette={generatePalette(seedColors[3])} />
    </div>);
}

export default App;
