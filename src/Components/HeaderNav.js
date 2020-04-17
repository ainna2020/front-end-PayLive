import React, { Component } from 'react'
import { View } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
class HeaderNav extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <>
        <View>
          <AntDesign name='left' />
        </View>
      </>
    )
  }
}

export default HeaderNav