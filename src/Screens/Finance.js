import React, { useState } from 'react'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native'
import HeaderComponent from '../Components/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'native-base'

const Finance = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <HeaderComponent title='Finance' />
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
              <Image
                source={require('../Assets/Images/finance.png')}
                resizeMode='cover'
                style={{ width: 300, height: 120, marginBottom: 20 }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Upgrade ke PayLive Premium dulu yuk! </Text>
              <Text style={{ fontSize: 18, marginBottom: 20 }}> kamu bisa nikmatin fiture premium </Text>
              <View style={styles.textStyle}>
                <Text onPress={() => setModalVisible(!modalVisible)} style={{ paddingVertical: 20, paddingHorizontal: 15, backgroundColor: '#f3cdf7', color: '#4a2d8b', borderRadius: 10 }}> Nanti aja </Text>
                <Text style={{ paddingVertical: 20, paddingHorizontal: 18, backgroundColor: '#4a2d8b', color: 'white', borderRadius: 10 }}> Upgrade Sekarang </Text>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <Text style={styles.textStyle}>Become Premium</Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a2d8b'
  },
  modalView: {
    margin: 10,
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
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 250
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
})

export default Finance
