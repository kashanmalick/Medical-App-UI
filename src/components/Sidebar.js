 import React from "react";
 import {View,StyleSheet,Dimensions} from "react-native";
 import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
 import { Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch } from "react-native-paper";
 import Icon from "react-native-vector-icons/MaterialCommunityIcons";

 const Sidebar =(props)=>{
     return(
         <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                 <View style={styles.ProfileHead}>
                    <Avatar.Image size={80} source={require('../assets/Image/ProfileImage.png')} style ={styles.Pimage} />
                    <View >
                        <Title style={styles.cross} onPress={() => props.drawerClose}>X</Title>
                        <Title style={styles.Title}>Sophie Garnier</Title>
                        <Caption style={styles.Caption}>Luxembourg</Caption>
                    </View>
                 </View>
                 {/* Drawer Section */}
                 <Drawer.Section>
                    <DrawerItem 
                        icon ={()=>(<Icon name="calendar-month-outline" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="My Appointments"
                        onPress={()=>{props.navigation.navigate('Appoinement')}}
                    />
                    <DrawerItem 
                        icon ={()=>(<Icon name="plus-circle-outline" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="New Appointments"
                        onPress={()=>{props.navigation.navigate('BookApoin')}}
                        
                    />
                    <DrawerItem 
                        icon ={()=>(<Icon name="file-document-outline" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="Medical Report"
                    />
                    <DrawerItem 
                        icon ={()=>(<Icon name="forum-outline" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="Forum"
                    />
                    <DrawerItem 
                        icon ={()=>(<Icon name="chart-line" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="Statistics"
                    />
                    <DrawerItem 
                        icon ={()=>(<Icon name="account-circle-outline" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="Account Settings"
                    />
                    <DrawerItem 
                        icon ={()=>(<Icon name="information-outline" style={{fontSize:22,color:'#2A2AC0'}} />)}
                        label="Help"
                    />
                 </Drawer.Section>

                 
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem 
                    icon ={()=>(<Icon name="logout" style={{fontSize:22,color:'#2A2AC0'}} />)}
                    label="Logout"
                    labelStyle
                />
            </Drawer.Section>
         </View>
     );
 }

 const styles = StyleSheet.create({
    ProfileHead: {
      flexDirection:"row",
      paddingTop:60,
      paddingLeft:20,
      paddingBottom:60,
      backgroundColor:"#ECF1FA",
    },
    Pimage:{
        borderColor:'#fff'
    },
    cross:{
        color:'#2A2AC0',
        textAlign:'right'
    },
    Title:{
        marginLeft:10,
        color:'#2A2AC0'
    },
    Caption:{
        marginLeft:10,
        color:'#181461'
    },
    labelStyle: {
        fontWeight: '200',
        fontSize: 12,
      }
  })
 export default Sidebar;