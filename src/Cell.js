import React, { Component } from 'react'
import styled from 'styled-components'

const CellContainer = styled.div`
  border: .03px solid #f1f1f1;
  background-color: ${props => props.fill};
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

class Cell extends Component {
  state = {
    fillColor: 'rgba(0, 0, 0, 0)'
  }

  mouseEnter = (e) => {
    if(this.props.down) {
      this.setState({fillColor: this.props.activeColor})
    }
  }

  handleClick = (e) => {
    if(e.button === 0) {
      this.setState({fillColor: this.props.activeColor})
    } else if(e.button === 2) {
      this.setState({fillColor: '#FFF'})
    }
  }

  render() {
    return (
      <CellContainer fill={this.state.fillColor} onClick={this.handleClick.bind(this)} onMouseEnter={this.mouseEnter.bind(this)} onContextMenu={this.handleClick.bind(this)}>
      </CellContainer>
    )
  }
}

export default Cell
