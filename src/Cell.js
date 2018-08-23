import React, { Component } from 'react'
import styled from 'styled-components'

const CellContainer = styled.div`
  border: 1px solid #f1f1f1;
  background-color: ${props => props.fill};
  &:hover {
    background: black;
  }
`

class Cell extends Component {
  state = {
    fillColor: '#FFF'
  }

  handleClick = (e) => this.setState({fillColor: this.props.activeColor})

  render() {
    return (
      <CellContainer fill={this.state.fillColor} onClick={this.handleClick.bind(this)}>
      </CellContainer>
    )
  }
}

export default Cell
