import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Deals from './Deals'
import Scan from './Scan'
import Finance from './Finance'
import Profile from './Profile'

const BottomTabs = createBottomTabNavigator()

class BottomStack extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name='Home' component={Home} />
          <BottomTabs.Screen name='Deals' component={Deals} />
          <BottomTabs.Screen name='Scan' component={Scan} />
          <BottomTabs.Screen name='Finance' component={Finance} />
          <BottomTabs.Screen name='Profile' component={Profile} />
        </BottomTabs.Navigator>
      </>
    )
  }
}

export default BottomStack
