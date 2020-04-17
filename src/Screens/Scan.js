import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native'
class Scan extends Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.handleSuccess = e => {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err)
      )
    }
  }

  render () {
    return (
      <QRCodeScanner
        onRead={this.handleSuccess}
        cameraStyle={{ marginTop: -50 }}
        bottomContent={
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home') } style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    )
  }
}

export default Scan
const styles = StyleSheet.create({

})