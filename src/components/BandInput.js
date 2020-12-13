// Add BandInput component
import React, { Component } from 'react'



class BandInput extends Component {

  state = {
    name: ''
  }

  handleonChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleonChange} type="text" value={this.state.name} id="name" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default BandInput
