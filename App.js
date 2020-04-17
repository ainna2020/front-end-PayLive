import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import screen
import Login from './src/Screens/LoginScreen'
import Join from './src/Screens/JoinPayLiveScreen'
import SKKP from './src/Screens/SKKPScreen'
import SecurityCode from './src/Screens/SecurityCode'
import LupaSecurityCode from './src/Screens/LupaSecurityCode'
import CodeOTP from './src/Screens/CodeOTPScreen'
import GreetingUser from './src/Screens/GreetingUser'

// import reedux

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import { store, persistor} from './src/Redux/Store'
import { connect} from 'react-redux'

const Stack = createStackNavigator()



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Join PayLive' component={Join} options={{ title: 'Join PayLive', headerShown: true, headerTintColor: '#5f27cd' }} />
        <Stack.Screen name='Security Code' component={SecurityCode} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
        <Stack.Screen name='Greeting User' component={GreetingUser} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          
          <Stack.Screen name='SKKP' component={SKKP} options={{ title: 'Syarat & Ketentuan', headerShown: true, headerTintColor: '#5f27cd' }} />
          
          <Stack.Screen name='Lupa Security Code' component={LupaSecurityCode} options={{ title: 'Lupa Security Code', headerShown: true, headerTintColor: '#5f27cd' }} />
          <Stack.Screen name='CodeOTP' component={CodeOTP} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
      </Provider>
    )
  }
}
