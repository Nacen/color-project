import React from "react";
import { Route, Switch } from "react-router-dom";

import SingleColorPalette from "./SingleColorPalette/SingleColorPalette";
import Palette from "./Palette/Palette";
import PaletteList from "./PaletteList/PaletteList";
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
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(findPalette(routeProps.match.params.paletteId))} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
