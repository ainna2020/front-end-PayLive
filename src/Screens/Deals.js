import React, { Component } from 'react'
import { ScrollView, ImageBackground, Text, StyleSheet } from 'react-native'
import HeaderComponent from '../Components/Header'
import { View, Input, Item } from 'native-base'
import CardPromo from '../Components/CardPromo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HeaderProme from '../Components/HeaderProme'
class Deals extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <ScrollView style={{ }}>
        <HeaderComponent title='Deals' />
        <View style={{ height: 60, alignItems: 'center', justifyContent: 'center', flex: 1, paddingHorizontal: 20, backgroundColor: 'white' }}>
          <Item style={{ borderBottomWidth: 0 }}>
            <Input
              placeholder='Cari Merchants'
              style={{ height: 40, textAlign: 'center', backgroundColor: '#eff0f4', borderRadius: 5, marginRight: 5 }}
            />
            <MaterialCommunityIcons name='ticket-percent' color='#35b6f2' size={40} />
          </Item>
        </View>
        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
          <ImageBackground
            style={{ width: 300, height: 110, borderRadius: 20 }}
            source={require('../Assets/Images/desc.jpg')}
          >
            <Text style={{
              position: 'absolute',
              bottom: 5,
              right: 7,
              color: '#fff'
            }}
            >
              1 langkah menuju deals WAH
            </Text>
          </ImageBackground>
        </View>

        <View horizontal style={{ marginTop: 10, backgroundColor: 'white' }}>
          <HeaderProme
            title='Cashback lagi dan lagi'
            desc='Serbu berbagai promo terbaru PayLive'
            link='Lihat Semua'
          />
          <ScrollView horizontal>
            <CardPromo
              img={require('../Assets/Images/promo1.jpg')}
            />
            <CardPromo
              img={require('../Assets/Images/promo2.jpg')}
            />
            <CardPromo
              img={require('../Assets/Images/promo3.jpg')}
            />
            <CardPromo
              img={require('../Assets/Images/promo4.jpeg')}
            />
            <CardPromo
              img={require('../Assets/Images/promo5.jpg')}
            />
          </ScrollView>
        </View>
        <View horizontal style={{ paddingVertical: 10, marginTop: -80, backgroundColor: 'white' }}>
          <HeaderProme
            title='Cashback lagi dan lagi'
            desc='Serbu berbagai promo terbaru PayLive'
            link='Lihat Semua'
          />
          <ScrollView horizontal>
            <CardPromo
              img={require('../Assets/Images/voucer.jpg')}
              text1='Semua menu diskon 25%'
              text2='McDonalds'
              text3='Tersedia 7097 vouchers'
              text4='Rp75.000'
            />
            <CardPromo
              img={require('../Assets/Images/voucer1.jpg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
            <CardPromo
              img={require('../Assets/Images/promo3.jpg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
            <CardPromo
              img={require('../Assets/Images/promo4.jpeg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
            <CardPromo
              img={require('../Assets/Images/promo5.jpg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
          </ScrollView>
        </View>
        <View horizontal style={{ paddingVertical: 10, marginTop: 10, backgroundColor: 'white' }}>
          <HeaderProme
            title='Cashback lagi dan lagi'
            desc='Serbu berbagai promo terbaru PayLive'
            link='Lihat Semua'
          />
          <ScrollView horizontal>
            <CardPromo
              img={require('../Assets/Images/voucer3.jpg')}
              text1='All you can eat Korean BBQ'
              text2='GogiJjang Korean BBQ'
              text3='Tersedia 7097 vouchers'
              text4='Rp95.000'
            />
            <CardPromo
              img={require('../Assets/Images/voucer4.jpg')}
              text1='[ Pay day Special ] Voucer'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp100.000'
            />
            <CardPromo
              img={require('../Assets/Images/promo3.jpg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
            <CardPromo
              img={require('../Assets/Images/promo4.jpeg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
            <CardPromo
              img={require('../Assets/Images/promo5.jpg')}
              text1='Belanja mudah di hypermart'
              text2='Hypermart'
              text3='Tersedia 10000 vouchers'
              text4='Rp40.000'
            />
          </ScrollView>
        </View>
        <View style={style.Body}>
          <HeaderProme
            title='Nikmat Dunia Lainnya'
            desc='Silakan dilihat-lihat kakak'
          />
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <FontAwesome5 style={style.IconNav} name='hamburger' size={30} color='#F7C738' />
              <Text>Food</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <FontAwesome5 style={style.IconNav} name='shopping-bag' size={30} color='blue' />
              <Text>Shoping</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <FontAwesome5 style={style.IconNav} name='car' size={30} color='green' />
              <Text>Transport</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <FontAwesome5 style={style.IconNav} name='user-graduate' size={30} color='lightblue' />
              <Text>Education</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <MaterialCommunityIcons style={style.IconNav} name='gift-outline' size={30} color='#77c969' />
              <Text>Gift</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <Ionicons style={style.IconNav} name='ios-bus' size={30} color='#e05514' />
              <Text>Travel</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <Feather style={style.IconNav} name='user' size={30} color='#9c49eb' />
              <Text>Services</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <FontAwesome5 style={style.IconNav} name='basketball-ball' size={30} color='#4b088a' />
              <Text>Sport</Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <Ionicons style={style.IconNav} name='ios-shirt' size={30} color='#F7C738' />
              <Text>Fashion</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <AntDesign style={style.IconNav} name='medicinebox' size={30} color='green' />
              <Text>Health</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <AntDesign style={style.IconNav} name='carryout' size={30} color='green' />
              <Text>Entertaint</Text>
            </View>
            <View style={{ alignItems: 'center', height: 64, justifyContent: 'space-between' }}>
              <AntDesign style={style.IconNav} name='setting' size={30} color='lightblue' />
              <Text>Automotive</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Deals

const style = StyleSheet.create({
  IconNav: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(168, 168, 168, 0.02)',
    textAlign: 'center'
  },
  Body: {
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    backgroundColor: 'white',
    elevation: 5
  }
})
