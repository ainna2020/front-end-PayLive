import config from '../../Utils/config'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { ToastAndroid } from 'react-native'

export const isLogin = (id) => async dispatch => {
  try {
    query = `auth/security/check/${id}`
    const isLogin = await axios.post(config.APP_BACKEND.concat(query))
  if (isLogin.data.token) {
    AsyncStorage.setItem('token_user', isLogin.data.token)
    dispatch({
      type: 'IS_LOGIN',
      payload: isLogin.data.token
    })
  } else {
    ToastAndroid.show('Wrong Security Code', ToastAndroid.SHORT)
  }
  } catch (error) {
    console.log(error)
  }
}

export const Register = (data) => async dispatch => {
  try {
    const results = await axios.post(config.APP_BACKEND.concat('auth/register'),data)
    console.log('ayolo', results.data.success)
    if(results.data.success === true) {
      dispatch({
      type: 'IS_REGISTER',
      payload: results.data
      })
    } else {
      ToastAndroid.show('Register anda tidak berhasil, pastikan memasukkan data dengan benar', ToastAndroid.SHORT)
    }
    } catch (error) {
      console.log(error)
    }
}