import React, { Component } from 'react'
import { Header, Avatar, Badge } from 'react-native-elements'
import { View } from 'native-base'
class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Header
        placement='left'
        leftComponent={{ style: { fontSize: 36, fontFamily: 'Caladea-Regular', color: '#fff' }, text: `${this.props.title}`, color: '#fff' }}
        rightComponent={
          <View>
            <Avatar
              size='medium'
              icon={{ name: 'bell', type: 'font-awesome' }}
              overlayContainerStyle={{ marginLeft: 25, backgroundColor: 'rgba(0,0,0,0)' }}
            />
            <Badge
              status='error'
              containerStyle={{ position: 'absolute', top: 12, left: 40 }}
            />
          </View>
        }
        containerStyle={{
          backgroundColor: '#4a2d8b',
          height: 68,
          borderColor: '#4a2d8b',
          borderBottomWidth: 0
        }}
      />
    )
  }
}

export default HeaderComponent
