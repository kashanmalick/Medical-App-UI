import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

function LogoText() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Image/logo.png')} style={styles.image} />
      <Text></Text>
      <Text style={styles.appText}><Text style={styles.medicalText}>Medical</Text> App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  medicalText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2A2AC0',
  },
  appText: {
    fontSize: 22,
    color: '#2A2AC0'
  },
  image:{
        marginTop:80,
        resizeMode:'contain'
  }
})


export default LogoText;