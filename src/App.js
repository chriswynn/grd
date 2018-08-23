import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Grid from './Grid'

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
  render() {
    return (
      <div className="App">
        <Grid cellSize={16}/>
      </div>
    );
  }
}

export default App;
