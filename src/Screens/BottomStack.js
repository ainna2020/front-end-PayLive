import React, { Component, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Deals from './Deals'
import Scan from './Scan'
import Finance from './Finance'
import Profile from './Profile'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const BottomTabs = createBottomTabNavigator()

class BottomStack extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  Finance () {
    const [modalVisible, setModalVisible] = useState(false)
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType='slide'
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 0
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})
