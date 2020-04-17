import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const { width: WIDTH } = Dimensions.get('window')
export default class SKKPScreen extends Component {
  constructor(props){
    super(props)
    this.changeScreenToCodeOTP= () => {
      this.props.navigation.navigate('CodeOTP')
    }
  }
  render() {
    console.disableYellowBox=true
    return (
      <ScrollView>
        <View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', fontFamily: 'sans-serif' }}>
              Syarat dan Ketentuan PayLive
          </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, textAlign: 'left', fontFamily: 'sans-serif' }}>
              Selamat datang di Aplikasi PayLive!</Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWight: 'bold', textAlign: 'left', }}>
              Terima kasih Anda telah mengakses situs atau mengunduh,
              menggunakan layanan, produk dan/atau aplikasi (“Aplikasi”) PayLive.
              Aplikasi PayLive adalah layanan aplikasi uang elektronik yang diterbitkan oleh Kami.
            </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWight: 'bold', textAlign: 'left', }}>
              Syarat dan Ketentuan ini juga berlaku setiap kali Anda melakukan transaksi
              menggunakan Aplikasi PayLive melalui mitra penyedia platform lain yang menandatangani
              perjanjian kerjasama dengan Kami dan menggunakan Aplikasi PayLive sebagai salah satu metode pembayaran.
            </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left', color: '#4E3C86' }}>
              A. Registrasi, Kode Verifikasi (OTP) dan Security Code </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, textAlign: 'left' }}>
              1. Untuk dapat menjadi pengguna Aplikasi OVO (“Pengguna OVO”),
              Anda harus melakukan registrasi (i) melalui Aplikasi PayLive, atau (ii) Partner OVO
            </Text>
            <Text style={{ fontSize: 12, textAlign: 'left' }}> 2. Anda wajib memastikan kebenaran dan keakuratan setiap data,
            informasi dan/atau keterangan dalam bentuk apapun yang dari waktu ke waktu Anda sampaikan
            kepada Kami atau yang Anda cantumkan atau sampaikan dalam,
              pada atau melalui aplikasi Partner OVO (“Data”). </Text>
            <Text style={{ fontSize: 12, textAlign: 'left' }}>
              3. Registrasi Pengguna OVO baik melalui Aplikasi OVO atau melalui Partner OVO diwajibkan
              untuk memiliki nomor ponsel aktif yang dibuktikan dengan memasukkan kode verifikasi berupa
               kode One Time Password atau “OTP”. </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left', color: '#4E3C86' }}>
              B. Biaya Layanan </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWight: 'bold', textAlign: 'left', }}>
              Kami dapat mengenakan biaya dalam rangka penggunaan layanan pada Aplikasi OVO, termasuk namun tidak terbatas pada layanan pengisian saldo (top-up),
              pembayaran, transfer, redeem, dan/atau pencairan uang. Keterangan mengenai jumlah biaya yang dikenakan akan kami sediakan melalui media komunikasi,
              website, dan/atau media lain yang Kami tentukan dari waktu ke waktu.
            </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'left', color: '#4E3C86' }}>
              C. Klasifikasi Akun OVO </Text>
          </View>
          <View style={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 12, fontWight: 'bold', textAlign: 'left', }}>
              Aplikasi OVO menawarkan 2 (dua) jenis klasifikasi akun Pengguna OVO dengan jenis layanan atau fitur-fitur yang berbeda. Klasifikasi akun tersebut adalah:
              - OVO Club
              OVO Club adalah klasifikasi akun OVO yang memungkinkan Pengguna OVO untuk dapat menikmati layanan uang elektronik tidak terverifikasi.
              Untuk OVO Club, maksimum saldo OVO Cash adalah Rp 2.000.000 (dua juta Rupiah) dengan batas nilai transaksi dalam 1 (satu) bulan paling banyak Rp20.000.000 (dua puluh juta Rupiah), yang diperhitungkan dari transaksi yang bersifat incoming.
              Untuk dapat memanfaatkan fitur layanan lainnya pada Aplikasi OVO, maka Anda dapat meng-upgrade akun OVO Club Anda menjadi akun OVO Premier.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.goBack()}>
          <Text>Kembali</Text>
        </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },

})