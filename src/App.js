import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Grid from './Grid'
import Picker from './Picker'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    padding: 0px;
  }
`

class App extends Component {
  state = {
    activeColor: '#000'
  }

  setActiveColor = (color) => {
    this.setState({
      activeColor: color
    })
  }

  componentDidMount() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault()
    }, false)
  }

  render() {
    return (
      <div className="App">
        <Grid activeColor={this.state.activeColor} cellSize={16}/>
        <Picker setActiveColor={this.setActiveColor.bind(this)}/>
      </div>
    );
  }
}

export default App;
