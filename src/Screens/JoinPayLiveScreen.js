import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Input } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CheckBox } from 'react-native-elements'
import { Register} from '../Redux/Actions/ActionsAuth'
import { connect } from 'react-redux'


const { width: WIDTH } = Dimensions.get('window')

class JoinPayLive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: '',
      fullnameError: null,
      email: '',
      error: null,
      emailError: null,
      phone: 0,
      phoneError: null,
      isLoading: false,
      activeBtn : true,
      checked : false,
      styleBtn : styles.disabledBtn

    }
    this.checkname = () => {
      let req = /^[a-zA-Z]+$/
      console.log(req.test(this.state.fullname))
      if (!req.test(this.state.fullname)) {
        this.setState({ fullnameError: 'Nama anda salah' })
      } else {
        this.setState({ fullnameError: null })
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
    this.code = code => {
      this.setState ({ code })
    }
console.log('q')
    this.submitData = () => {
      this.setState({ isLoading: true})
      const data = {
        fullname: this.state.fullname,
        phone: this.state.phone,
        email: this.state.email
      }
      console.log('register', data)
      this.props.Register(data)
      if(this.props.register.success === true) {
        this.props.navigation.navigate('CodeOTP', {code: () => this.code(code)} )
      } else {
        ToastAndroid.show('Register anda tidak berhasil, pastikan memasukkan data dengan benar', ToastAndroid.SHORT)
      }
    }
    this.changeScreenToCodeOTP= () => {
      this.props.navigation.navigate('CodeOTP')
    }
    this.changeScreenToSKKP= () => {
      this.props.navigation.navigate('SKKP')
    }
  }

  componentDidMount (){
    console.log('ya Allah mudahkanlah',this.props.register)
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
            onChangeText={(text) => this.setState({ fullname: text})}
            onBlur={() => this.checkname()}
            errorStyle={{ color: 'red' }}
            errorMessage={
              !this.state.fullnameError ? false : 'Nama harus mengandung alphabet'
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
            checked={this.state.checked}
            CheckBox={{color: '48387E'}}
          />

          <TouchableOpacity onPress={this.changeScreenToSKKP}>
            <Text style={styles.textSKKP}>Syarat dan Ketentuan</Text>
          </TouchableOpacity>
          
          </View>
        </View>
        <TouchableOpacity disabled={this.state.activeBtn} style={this.state.activeBtn ? styles.disabledBtn : styles.btn} onPress={this.submitData}>
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

const mapStateToProps = (state) => ({
  register: state.auth.isRegister
})

export default connect(mapStateToProps, {Register})(JoinPayLive)
