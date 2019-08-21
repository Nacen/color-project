import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette/Palette";
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
        <Route exact path="/" render={() => <h1>Palette List</h1>} />
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
