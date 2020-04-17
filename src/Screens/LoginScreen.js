import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label } from 'native-base';
import IconUser from 'react-native-vector-icons/EvilIcons'
import { isLogin} from '../Redux/Actions/ActionsAuth'
import {connect} from 'react-redux'



const { width: WIDTH } = Dimensions.get('window')
class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: 0,
      phoneError: null

    }
    this.submitData = () => {
      this.setState({ isLoading: true})
      const data = {
        securityCode: this.state.securityCode
      }
      console.log(data, 'login')
      this.props.isLogin(data)
    }
    

    // this.submitData = () => {
    //   this.setState({ isLoading: true })
    //   const data = {
    //     username: this.state.username,
    //     password: this.state.password,
    //   }
    //   console.log(data, 'HALE')
    //   this.props.isLogin(data)
    // this.changeScreenToJoin = () => {
    //   this.props.navigation.navigate('Join PayLive')
    // }
    this.checkphone = () => {
      console.log('jajaja')
      let req = /^(^\+62\s?|^0)(\d{3,4}?){2}\d{3,4}$/
      console.log(req.test(this.state.phone));
      if (!req.test(this.state.phone)) {
        this.setState({ phoneError: 'Nomor ponsel anda salah' })
      } else {
        this.setState({ phoneError: null })
      }
    }
}
  render() {
    console.disableYellowBox=true
    return (
      <View style={styles.parent}>
        <View style={{ marginTop: 40 }} >
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 30, fontFamily: 'monospace' }} >
            PayLive
          </Text>
        </View>
        <View>
          <Form style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <IconUser name='user' size={40} color='#fff'
              style={styles.inputIcon} />
            <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Item floatingLabel style={{ width: '100%', alignItems: 'center' }}>
                <Label style={styles.input} 
                >Nomor Ponsel</Label>
                <Input style={{ color: '#fff' }} inputStyle={{ fontSize: 15 }}
            keyboardType='phone-pad'
            onChangeText={text => this.setState({ phone: text })}
            onBlur={() => this.checkphone()}
            errorStyle={{ color: 'red' }}
            errorMessage={
              !this.state.phoneError ? false : 'Silahkan masukan nomor ponsel anda'
            }/>
              </Item>
              <TouchableOpacity style={styles.btnSignIn}>
                <Text style={{ color: 'white' }}>SIGN IN</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', marginTop: 20 }}> ATAU </Text>
              <TouchableOpacity style={styles.btnJoinNow} onPress={this.changeScreenToJoin}>
                <Text style={{ color: 'white' }}>JOIN NOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={{ color: 'white' }}>Butuh Bantuan?</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </View>

      </View >
    )
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#5f27cd'
  },
  inputIcon: {
    position: 'absolute',
    top: 35,
    left: 20
  },
  input: {
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    color: '#fff',
    justifyContent: 'center'
  },
  btnSignIn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnJoinNow: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const mapStateToProps = (state) => ({
  login: state.login.isLogin
})

export default connect(mapStateToProps, { isLogin })(LoginScreen)
