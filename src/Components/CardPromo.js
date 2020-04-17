import React, { Component } from 'react'
import CardDesc from './CardDesc'

class CardPromo extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <CardDesc
        img={this.props.img}
        text1={this.props.text1}
        text2={this.props.text2}
        text3={this.props.text3}
        text4={this.props.text4}
      />
    )
  }
}

export default CardPromo
