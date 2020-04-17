import React, { Component } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

export default class CodeOTPScreen extends Component {
  constructor(props) {
    super(props)
    this.changeScreenToSecurity= () => {
      this.props.navigation.navigate('Security Code')
    }
  }
  render() {
    console.disableYellowBox=true
    return (
      <View>
        <View>
          <Text style={{ color: '#5f27cd', textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto'}}>
            Masukkan Kode
          </Text>
          <Text style={{textAlign: 'center'}}> Kami telah mengirimkan kode ke email Anda</Text>
        </View>
        <View >
          <TextInput
          style={{alignSelf: 'center', fontSize: 40}}
          keyboardType='phone-pad'
          placeholder='_ _ _ _'
          >
          </TextInput>
        </View>
        <TouchableOpacity onPress={this.changeScreenToSecurity}>
          <Text style={{fontSize: 15, fontWeight:'bold', color: '#00d2d3', textAlign:'center', marginTop: 50}}>KIRIM</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
