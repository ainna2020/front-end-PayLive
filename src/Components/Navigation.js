import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { View, Text } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
class NavigationComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={style.Body}>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <FontAwesome5 style={style.IconNav} name='lightbulb' size={30} color='#F7C738' />
            <Text>PLN</Text>
          </View>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <MaterialIcons style={style.IconNav} name='phone-android' size={30} color='blue' />
            <Text>Pulsa</Text>
          </View>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <Ionicons style={style.IconNav} name='ios-globe' size={30} color='green' />
            <Text>Paket Data</Text>
          </View>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <FontAwesome5 style={style.IconNav} name='money-check-alt' size={30} color='lightblue' />
            <Text>Pasca Bayar</Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <FontAwesome5 style={style.IconNav} name='shield-alt' size={30} color='#77c969' />
            <Text>BPJS</Text>
          </View>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <Feather style={style.IconNav} name='tv' size={30} color='#e05514' />
            <Text>TV Kabel</Text>
          </View>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <Entypo style={style.IconNav} name='tv' size={30} color='#9c49eb' />
            <Text>PLN</Text>
          </View>
          <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
            <Entypo style={style.IconNav} name='dots-three-horizontal' size={30} color='#4b088a' />
            <Text>Lainnya</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default NavigationComponent

const style = StyleSheet.create({
  IconNav: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(168, 168, 168, 0.02)',
    textAlign: 'center'
  },
  Body: {
    marginTop: 20,
    padding: 20,
    height: 200,
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    backgroundColor: 'white',
    elevation: 5
  }
})
