import React, { Component } from 'react'
import { View, Text } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
class HeaderProme extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <View style={{ paddingHorizontal: 10, paddingVertical: 10, backgroundColor: 'white' }}>
        <View style={home.descPayLive}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>{this.props.title}</Text>
            <Text style={{ fontSize: 16, color: '#888', marginBottom: 8 }}>{this.props.desc}</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: '#35b6f2' }}>{this.props.link}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default HeaderProme

const home = StyleSheet.create({
  descPayLive: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})
