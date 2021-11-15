import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LogoText from '../components/logoText';

const data = [
  {

    title: 'Find Your Doctor',
    image: require('../assets/Image/one.png'),

  },
  {
    title: 'Storage your \n Medical Records',
    image: require('../assets/Image/two.png'),

  },
  {
    title: 'Discuss in the \n Forum',
    image: require('../assets/Image/three.png'),
  },
];

function Onboard(props) {
const renderItem =({item})=>{
  return(
    <View style={styles.slide}>
      {/* <View style={{flex:0.3,marginTop:'20%'}}>
        <LogoText />
      </View> */}
      <View style={{flex:0.7}}>
        <Text style={styles.Title}>{item.title}</Text>
        <Image source={item.image} style={styles.Image}/>
      </View>
    </View>
  )
}

const keyExtractor =(item)=>item.title

  const renderNextButton=()=>{
    return(
      <View style={styles.RightTextWraper}>
        <Text style={styles.RightText}>Next</Text>
      </View>
    )
  }
  const renderSkipButton=()=>{
    return(
      <View style={styles.LeftTextWraper}>
        <Text style={styles.LeftText}>Skip</Text>
      </View>
    )
  }
  const renderDoneButton=()=>{
    return(
      <View style={styles.LeftTextWraper}>
        <Text style={styles.LeftText}>Done</Text>
      </View>
    )
  }
  const workDone=()=>{
    props.navigation.navigate('StartScreen')
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#ECF1FA", justifyContent: 'center', alignItems: 'center' }}>
                <View >
                    <View style={{ flex: 0.210 }}><LogoText /></View>
                    <View style={{ flex: 0.790 }}>
                        <StatusBar translucent backgroundColor="transparent" />
                        <AppIntroSlider
                            keyExtractor={keyExtractor}
                            renderItem={renderItem}
                            renderNextButton={renderNextButton}
                            renderSkipButton={renderSkipButton}
                            renderDoneButton={renderDoneButton}
                            // onSkip={workDone}
                            onDone={workDone}
                            showSkipButton
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            data={data}
                        />
                    </View>
                </View>
    </View>
);
}

const styles = StyleSheet.create({
  slide:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ECF1FA'
  },
  Image:{
    marginTop:10,
   resizeMode:'contain'
  },
  Title:{
    fontSize:24,
    color:'#181461',
    textAlign:'center',
    fontWeight:'bold',
  },
  RightTextWraper:{
    width:40,
    height:40,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center'

  },
  RightText:{
    color:'#2A2AC0',
    fontSize:14
  },
  LeftTextWraper:{
    width:40,
    height:40,
    marginLeft:10,
    justifyContent:'center',
    alignItems:'center'
  },
  LeftText:{
    color:'#2A2AC0',
    fontSize:14,
  },
  dotStyle:{
    backgroundColor:'#D8DDF5'
  },
  activeDotStyle:{
    backgroundColor:'#2A2AC0'
  },
});

export default Onboard;