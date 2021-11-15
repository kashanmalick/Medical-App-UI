import * as React from 'react';
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from '../../screen/Onboard';
import StartScreen from '../../screen/StartScreen';
import MobileNumber from '../../screen/MobileNumber';
import NumberVerification from '../../screen/NumberVerification';
import Location from '../../screen/Location';
import Map from '../../screen/Map';
import Dashboard from '../../screen/Dashboard';
import Appoinements from "../../screen/Appoinements";
import BookApoin from '../../screen/BookApoin';
import Sidebar from '../../components/Sidebar'



const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();



function DrawerNavigation() {
  
  return (
        <Drawer.Navigator drawerContent={props => <Sidebar {...props}/>} >
          <Drawer.Screen options={{ headerRight: () => (
          <Image
          source={require('../../assets/Image/acc.png')}
          style={{
              padding: 10,
              marginRight: 25,
              height: 25,
              width: 25,
              resizeMode: 'contain',
              alignItems: 'center',
          }}
      />
        )}} name="MyDashboard" component={Dashboard} />
          <Drawer.Screen name="Appoinement" component={Appoinements} />
          <Drawer.Screen name="BookApoin" component={BookApoin} />
        </Drawer.Navigator>

  );
}



function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Intro_Slider" component={Onboard} />
          <Stack.Screen options={{headerShown: false}} name="StartScreen" component={StartScreen} />
          <Stack.Screen options={{headerShown: false}} name="MobileNumber" component={MobileNumber} />
          <Stack.Screen options={{headerShown: false}} name="NumberVerification" component={NumberVerification} />
          <Stack.Screen options={{headerShown: false}} name="Location" component={Location} />
          <Stack.Screen options={{headerShown: false}} name="Map" component={Map} />
          <Stack.Screen options={{headerShown: false}} name="Dashboard" component={DrawerNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}



export default AppNavigation;