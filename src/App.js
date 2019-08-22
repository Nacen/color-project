import React from "react";
import { Route, Switch } from "react-router-dom";

import MiniPalette from './MiniPalette/MiniPalette';
import Palette from "./Palette/Palette";
import PaletteList from './PaletteList/PaletteList';
import seedColors from "./seedColor";
import { generatePalette } from "./colorHelpers";

import "./App.css";

const findPalette = id => {
  return seedColors.find(palette => palette.id === id);
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
          )}
        />
      </Switch>
      {/* <Pallete palette={generatePalette(seedColors[3])} /> */}
    </div>
  );
}

export default App;
