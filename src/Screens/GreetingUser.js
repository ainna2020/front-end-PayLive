import React, { Component } from 'react'
import { StyleSheet, Text, ScrollView, Dimensions} from 'react-native'
import { Card} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'


const { width: WIDTH } = Dimensions.get('window')
export default class GreetingUser extends Component {
  constructor(props){
    super(props)
    this.changeScreenToLogin = () => {
      this.props.navigation.navigate('Login')
    }
  }
  render() {
    console.disableYellowBox=true
    return (
      <ScrollView horizontal={true}>
        <Card
              containerStyle={{ borderRadius: 20, width: 330, backgroundColor: '#fff' }}
              title='PayLive'
              titleStyle={{fontSize: 45, marginBottom: 70, color: '#4E3C86'}}
              imageStyle={{marginTop: 50}}
              image={require('../Assets/Images/greeting1.png')} >
                <Text style={{fontSize: 15, color: '#3F458E', textAlign: 'center', fontWeight: 'bold', marginTop: 20}}>Hai, selamat bergabung di PayLive!</Text>
                <Text style={{fontSize: 15, color: '#3F458E', textAlign: 'center', marginTop: 20}}>Kini transaksi lebih mudah dengan PayLive</Text>
            </Card>
            <Card
              containerStyle={{ borderRadius: 20, width: 330, backgroundColor: '#fff' }}
              title='PayLive'
              titleStyle={{fontSize: 45, marginBottom: 70, color: '#4E3C86'}}
              imageStyle={{marginTop: 50}}
              image={require('../Assets/Images/greeting2.png')} >
                <Text style={{fontSize: 15, color: '#3F458E', textAlign: 'center', fontWeight: 'bold', marginTop: 20}}>Anda Bisa Atur Keuangan Dengan Tepat</Text>
                <Text style={{fontSize: 15, color: '#3F458E', textAlign: 'center', marginTop: 20}}>Tidak ada kebocoran keuangan karena sudah memiliki perencanaan dan dan bisa melihat riwayat </Text>
                <TouchableOpacity style={styles.btn} onPress={this.changeScreenToLogin}>
          <Text style={{color: '#fff'}}>Mulai</Text>
        </TouchableOpacity>
            </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#B8A1FB',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
