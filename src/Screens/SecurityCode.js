import React, { Component } from 'react'
import {View,Text, Stylesheet, } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'


export default class SecurityCode extends Component {
  constructor(props) {
    super(props)
    this.changeScreenToLupaSecurityCode = () => {
      this.props.navigation.navigate('Lupa Security Code')
    }
    this.changeScreenToLogin = () => {
      this.props.navigation.navigate('Login')
    }
  }
  render() {
    console.disableYellowBox=true
    return (
      <View>
        <View>
          <Text style={{ color: '#5f27cd', textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto'}}>
            Masukan Security Code Anda
          </Text>
        </View>
        <View >
          <TextInput
          style={{alignSelf: 'center', fontSize: 40}}
          keyboardType='phone-pad'
          placeholder='_ _ _ _ _ _'
          >
          </TextInput>
        </View>
        <TouchableOpacity onPress={this.changeScreenToLogin}>
          <Text style={{fontSize: 15, fontWeight:'bold', color: '#00d2d3', textAlign:'center', marginTop: 50}}>KIRIM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.changeScreenToLupaSecurityCode}>
          <Text style={{fontSize: 15, fontWeight:'bold', color: '#00d2d3', textAlign:'center', marginTop: 50}}>LUPA SECURITY CODE?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
