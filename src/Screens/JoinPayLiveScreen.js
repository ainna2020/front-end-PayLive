import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Input } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-elements'


const { width: WIDTH } = Dimensions.get('window')
export default class JoinPayLive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nama: '',
      namaError: null,
      email: '',
      error: null,
      emailError: null,
      phone: 0,
      phoneError: null,
      activeBtn : true,
      checked : false,
      styleBtn : styles.disabledBtn
    }
    this.checkname = () => {
      let req = /^[a-zA-Z]+$/
      console.log(req.test(this.state.nama))
      if (!req.test(this.state.nama)) {
        this.setState({ namaError: 'Nama anda salah' })
      } else {
        this.setState({ namaError: null })
      }
    }
    this.checkphone = () => {
      console.log('NAKASAS')
      let req = /^(^\+62\s?|^0)(\d{3,4}?){2}\d{3,4}$/
      console.log(req.test(this.state.phone));
      if (!req.test(this.state.phone)) {
        this.setState({ phoneError: 'Nomor ponsel anda salah' })
      } else {
        this.setState({ phoneError: null })
      }
    }
    this.checkemail = () => {
      console.log('check email')
      let req = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!req.test(this.state.email)) {
        this.setState({ emailError: 'Email anda salah' })
      } else {
        this.setState({ emailError: null })
      }
    }
    this.checkButton = () => {
      this.setState ({
        checked : !this.state.checked,
        activeBtn : !this.state.activeBtn
      })
    }
    this.changeScreenToCodeOTP= () => {
      this.props.navigation.navigate('CodeOTP')
    }
    this.changeScreenToSKKP= () => {
      this.props.navigation.navigate('SKKP')
    }
  }

  render() {
    console.disableYellowBox = true
    return (
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 15, textAlign: 'left' }}>
            Terimakasih telah bergabung! Kami akan mengirimkan kode melalui email untuk verifikasi proses registrasi
        </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            inputStyle={{ fontSize: 15 }}
            label='Nama Lengkap'
            labelStyle={{ color: 'black', fontSize: 12 }}
            onChangeText={text => this.setState({ nama: text })}
            onBlur={() => this.checkname()}
            errorStyle={{ color: 'red' }}
            errorMessage={
              !this.state.namaError ? false : 'Nama harus mengandung alphabet'
            }
          />
          <Input style={styles.inputText}
            inputStyle={{ fontSize: 15 }}
            label='Nomor Ponsel'
            keyboardType='phone-pad'
            labelStyle={{ color: 'black', fontSize: 12 }}
            onChangeText={text => this.setState({ phone: text })}
            onBlur={() => this.checkphone()}
            errorStyle={{ color: 'red' }}
            errorMessage={
              !this.state.phoneError ? false : 'Silahkan masukan nomor ponsel anda'
            }
          />
          <Input style={styles.inputText}
            inputStyle={{ fontSize: 15 }}
            label='Email'
            keyboardType='email-address'
            labelStyle={{ color: 'black', fontSize: 12 }}
            errorStyle={{ color: 'red' }}
            onChangeText={text => this.setState({ email: text })}
            onBlur={() => this.checkemail()}
            errorMessage={
              !this.state.emailError ? false : 'Silahkan masukan email anda'
            }
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            onPress = {this.checkButton}
            // title={}
            checked={this.state.checked}
            CheckBox={{color: '48387E'}}
          />

          <TouchableOpacity onPress={this.changeScreenToSKKP}>
            <Text style={styles.textSKKP}>Syarat dan Ketentuan</Text>
          </TouchableOpacity>
          
          </View>
        </View>
        <TouchableOpacity disabled={this.state.activeBtn} style={this.state.activeBtn ? styles.disabledBtn : styles.btn} onPress={this.changeScreenToCodeOTP}>
          <Text>Berikutnya</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  inputText: {
    marginBottom: 20
  },
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  disabledBtn : {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#CED6E0'
  },
  textSKKP : {
    color: '#1e90ff',
    fontWeight: 'bold'
  }

})