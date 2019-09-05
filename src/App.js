import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import SingleColorPalette from "./SingleColorPalette/SingleColorPalette";
import Palette from "./Palette/Palette";
import PaletteList from "./PaletteList/PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./NewPaletteForm/NewPaletteForm";
import Page from "./Page/Page";

function App() {
  const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  useEffect(() => {
    const syncLocalStorage = () => {
      localStorage.setItem("palettes", JSON.stringify(palettes));
    };
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
          <CSSTransition key={location.key} classNames="page" timeout={400}>
            <Switch location={location}>
              <Route
                exact
                path="/palette/new"
                render={routeProps => (
                  <Page>
                    <NewPaletteForm
                      savePalette={savePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/"
                render={routeProps => (
                  <Page>
                    <PaletteList
                      deletePalette={deletePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <Page>
                    <Palette
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                path="/palette/:paletteId/:colorId"
                render={routeProps => (
                  <Page>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.paletteId)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                render={routeProps => (
                  <Page>
                    <PaletteList
                      deletePalette={deletePalette}
                      palettes={palettes}
                      {...routeProps}
                    />
                  </Page>
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
