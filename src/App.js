import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

  const deletePalette = paletteId => {
    setPalettes(palettes.filter(palette => palette.id !== paletteId));
  };

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={routeProps => (
                  <div className="page">
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/"
                render={routeProps => (
                  <div className="page">
                    <PaletteList
                      deletePalette={deletePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </div>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <div className="page">
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </div>
                )}
              />
              <Route
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <div className="page">
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </div>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
