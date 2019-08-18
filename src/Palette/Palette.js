import React, { Component } from 'react'

import './Palette.css';
import ColorBox from '../ColorBox/ColorBox';

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => {
      return <ColorBox background={color.color} name={color.name}/>
    })
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    )
  }
}
export default Palette; 
