import React from "react";
import Pallete from "./Palette/Palette";
import seedColors from './seedColor';

import "./App.css";

function App() {
  return (<div className="App">
      <Pallete {...seedColors[3]} />
    </div>);
}

export default App;
