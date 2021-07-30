import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import HomeScreen from './screens/HomeScreen'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack=createStackNavigator();

export default class App extends React.Component{
  render(){
    return( 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" 
          screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Pics" component={DailyPic}/>
            <Stack.Screen name="Space Crafts" component={SpaceCrafts}/>
            <Stack.Screen name="Star Map" component={StarMap}/>
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}