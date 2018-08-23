import React, { Component } from 'react'
import styled from 'styled-components'

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

const Cell = styled.div`
  border: 1px solid #f1f1f1;
  &:hover {
    background: black;
  }
`

class Grid extends Component {
  createCells = () => {
    let cells = []
    for(let i = 0; i < this.props.cellSize * this.props.cellSize; i++) {
      cells.push(<Cell key={i}></Cell>)
    }
    return cells
  }

  render() {
    return (
      <GrdContainer>
        <Grd cellCount={this.props.cellSize}>
          {this.createCells()}
        </Grd>
      </GrdContainer>
    )
  }
}

export default Grid
