import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import SingleColorPalette from "./SingleColorPalette/SingleColorPalette";
import Palette from "./Palette/Palette";
import PaletteList from "./PaletteList/PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

import "./App.css";
import NewPaletteForm from "./NewPaletteForm/NewPaletteForm";

function App() {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  React.useEffect(() => {
    function syncLocalStorage() {
      return localStorage.setItem("palettes", JSON.stringify(palettes));
    }
    syncLocalStorage();
  }, [palettes]);

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm
              savePalette={savePalette}
              palettes={palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
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
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
