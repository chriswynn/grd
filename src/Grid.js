import React, { Component } from 'react'
import styled from 'styled-components'
import Cell from './Cell'

const GrdContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Grd = styled.div`
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);
  display: grid;
  grid-template-columns: repeat(${props => props.cellCount}, 1fr);
  height: 50vw;
  width: 50vw;
`

class Grid extends Component {
  state = {
    down: false
  }

  mouseUp = (e) => {
    this.setState({
      down: false
    })
  }

  mouseDown = (e) => {
    this.setState({
      down: true
    })
  }

  createCells = () => {
    let cells = []
    for(let i = 0; i < this.props.cellSize * this.props.cellSize; i++) {
      cells.push(<Cell activeColor={this.props.activeColor} down={this.state.down} key={i}></Cell>)
    }
    return cells
  }

  render() {
    return (
      <GrdContainer>
        <Grd onMouseDown={this.mouseDown.bind(this)} onMouseUp={this.mouseUp.bind(this)} cellCount={this.props.cellSize}>
          {this.createCells()}
        </Grd>
      </GrdContainer>
    )
  }
}

export default Grid
