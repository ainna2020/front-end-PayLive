import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Screens/LoginScreen'
import Join from './src/Screens/JoinPayLiveScreen'
import SKKP from './src/Screens/SKKPScreen'
import SecurityCode from './src/Screens/SecurityCode'
import LupaSecurityCode from './src/Screens/LupaSecurityCode'
import CodeOTP from './src/Screens/CodeOTPScreen'
import GreetingUser from './src/Screens/GreetingUser'
import BottomStack from './src/Screens/BottomStack'
import TopUp from './src/Screens/TopUp'
import CategoryPulsa from './src/Screens/CategoryPulsa'
import EditProfile from './src/Screens/EditProfile'
import UbahEmail from './src/Screens/UbahEmail'
import TransferRek from './src/Screens/TransferRekening'
import TransferPaylive from './src/Screens/TransferPaylive'
import konfirmasi from './src/Screens/KonfirmasiTransfer'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Redux/Store'
const Stack = createStackNavigator()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Home' component={BottomStack} options={{ headerShown: false }} />
              <Stack.Screen name='Greeting User' component={GreetingUser} options={{ headerShown: false }} />
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
              <Stack.Screen name='Join PayLive' component={Join} options={{ title: 'Join PayLive', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='SKKP' component={SKKP} options={{ title: 'Syarat & Ketentuan', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Security Code' component={SecurityCode} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Lupa Security Code' component={LupaSecurityCode} options={{ title: 'Lupa Security Code', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='CodeOTP' component={CodeOTP} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Category Pulsa' component={CategoryPulsa} options={{ title: 'Pulsa', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Edit Profile' component={EditProfile} options={{ headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Ubah Email' component={UbahEmail} options={{ headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='TransferRek' component={TransferRek} options={{ headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Transfer PayLive' component={TransferPaylive} options={{ headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Konfirmasi Transfer' component={konfirmasi} options={{ headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Top Up' component={TopUp} options={{ title: 'TOP UP', headerShown: true, headerTintColor: '#5f27cd' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}
