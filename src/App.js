import React from "react";
import { Route, Switch } from "react-router-dom";
import Pallete from "./Palette/Palette";
import seedColors from "./seedColor";
import { generatePalette } from "./colorHelpers";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>Individual Palette</h1>}/>
      </Switch>
      {/* <Pallete palette={generatePalette(seedColors[3])} /> */}
    </div>
  );
}

export default App;
