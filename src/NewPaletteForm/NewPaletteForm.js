import React, { Component } from "react";
import SideDrawer from "../SideDrawer/SideDrawer";

class NewPaletteForm extends Component {
  render() {
    return <SideDrawer savePalette={this.props.savePalette} history={this.props.history} />;
  }
}
export default NewPaletteForm;
