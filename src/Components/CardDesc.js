import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import { Card } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class CardDesc extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <View>
        <Card containerStyle={{ padding: 0, borderRadius: 20 }}>
          <Image source={this.props.img} resizeMode='stretch' style={styles.image} />
          <MaterialIcons style={{ textAlign: 'right' }} name={this.props.icon} color={this.props.color} size={0} />
        </Card>
        <View style={{ marginLeft: 30, marginTop: 10 }}>
          <Text style={{ fontSize: 20, marginBottom: 7 }}> {this.props.text1} </Text>
          <Text style={{ fontSize: 16, marginBottom: 7 }}> {this.props.text2} </Text>
          <Text style={{ fontSize: 14, marginBottom: 7 }}> {this.props.text3} </Text>
          <Text style={{ fontSize: 18, color: '#4a2d8b' }}> {this.props.text4} </Text>
        </View>
      </View>
    )
  }
}

export default CardDesc

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 20
  }
})
