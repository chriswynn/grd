import 'rc-color-picker/assets/index.css'
import React, { Component } from 'react'
import styled from 'styled-components'
import ColorPicker from 'rc-color-picker'

const ColorPickerContainer = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
`

class Picker extends Component {
  state = {
    pickerColor: "#000"
  }

  setColor = (color) => {
    this.props.setActiveColor(color.color)
    this.setState({
      pickerColor: color.color
    })
  }

  render() {
    return (
      <ColorPickerContainer>
        <ColorPicker animation="slide-up" color={this.state.pickerColor} onChange={this.setColor.bind(this)}/>
      </ColorPickerContainer>
    )
  }
}

export default Picker
