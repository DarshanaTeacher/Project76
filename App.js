import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import DailyPic from './screen/DailyPic';
import SpaceCrafts from './screen/SpaceCrafts';
import StarMap from './screen/StarMap';


const Stack = createStackNavigator();
export default function App(){
   
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCrafts}/>
        <Stack.Screen name="StarMap" component={StarMap} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
  
;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
