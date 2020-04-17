import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Badge, Image, Button } from 'react-native-elements'
import { Text, Card, Right } from 'native-base'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'

const styles = StyleSheet.create({
  profilePicture: {
    marginTop: 20,
    flexDirection: 'row'
  },
  Kios: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  Card: {
    width: 150,
    borderRadius: 8,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  Main: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 8,
    marginBottom: 10
  },
  Code: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 100,
    alignItems: 'center'
  },
  ViewList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eeefff'
  }
})

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.Main}>
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
            <Avatar
              size='medium'
              icon={{ color: '#4a2d8b', name: 'bell', type: 'font-awesome' }}
              overlayContainerStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
            />
            <Badge
              status='error'
              containerStyle={{ position: 'absolute', top: 12, right: 15 }}
            />
          </View>
          <Text style={{ fontSize: 28 }}>Profile</Text>
          <View style={styles.profilePicture}>
            <Image
              source={require('../Assets/Images/user.png')}
              style={{ width: 45, height: 45 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ainaya</Text>
              <Text> 0812-3456-7891 </Text>
            </View>
          </View>
          <View style={styles.Kios}>
            <Text> PayLive Club </Text>
            <Text> Lihat Kios PayLive <AntDesign name='right' /> </Text>
          </View>
        </View>
        <View style={styles.Main}>
          <Text style={{ fontSize: 24 }}> PayLive ID </Text>
          <View style={styles.Code}>
            <Card style={styles.Card}>
              <AntDesign color='#4a2d8b' name='qrcode' size={25} />
              <Text> QR Code</Text>
            </Card>
            <Card style={styles.Card}>
              <AntDesign color='#4a2d8b' name='barcode' size={25} />
              <Text> BarCode</Text>
            </Card>
          </View>
        </View>
        <View style={styles.Main}>
          <View>
            <Text style={{ fontSize: 20 }}>Akun</Text>
            <View style={styles.ViewList}>
              <FontAwesome5 color='#4a2d8b' style={{ marginRight: 15 }} active name='user-edit' size={16} />
              <Text>Ubah Profile</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
            <View style={styles.ViewList}>
              <FontAwesome5 color='#4a2d8b' style={{ marginRight: 15 }} active name='credit-card' size={16} />
              <Text>My Cards</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
            <View style={styles.ViewList}>
              <MaterialCommunityIcons color='#4a2d8b' style={{ marginRight: 15 }} active name='ticket-percent' size={20} />
              <Text>Kode Promo</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
          </View>
        </View>
        <View style={styles.Main}>
          <View>
            <Text style={{ fontSize: 20 }}>Akun</Text>
            <View style={styles.ViewList}>
              <Fontisto color='#4a2d8b' style={{ marginRight: 15 }} active name='locked' size={16} />
              <Text>Keamanan</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
          </View>
        </View>
        <View style={styles.Main}>
          <View>
            <Text style={{ fontSize: 20 }}>Tentang</Text>
            <View style={styles.ViewList}>
              <FontAwesome5 color='#4a2d8b' style={{ marginRight: 15 }} active name='medal' size={16} />
              <Text>Keuntungan pakai PayLive</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
            <View style={styles.ViewList}>
              <FontAwesome5 color='#4a2d8b' style={{ marginRight: 15 }} active name='lightbulb' size={16} />
              <Text>Panduan PayLive</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
            <View style={styles.ViewList}>
              <FontAwesome5 color='#4a2d8b' style={{ marginRight: 15 }} active name='list-alt' size={20} />
              <Text>Syarat dan Ketentuan</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
            <View style={styles.ViewList}>
              <MaterialCommunityIcons color='#4a2d8b' style={{ marginRight: 15 }} active name='shield-check' size={20} />
              <Text>Kebijakan dan Privasi</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
            <View style={styles.ViewList}>
              <Entypo color='#4a2d8b' style={{ marginRight: 15 }} active name='help-with-circle' size={20} />
              <Text>Pusat Bantuan</Text>
              <Right>
                <AntDesign color='#4a2d8b' name='right' />
              </Right>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text>Version 3.6.0 (300)</Text>
          <Text>#PakePayLiveaja</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button
            title='Sign Out'
            titleStyle={{ fontWeight: 'bold' }}
            containerStyle={{ marginVertical: 15, alignItems: 'center' }}
            buttonStyle={{ width: 300, borderRadius: 20, backgroundColor: '#4a2d8b', height: 50 }}
          />
        </View>
      </ScrollView>
    )
  }
}

export default Profile
