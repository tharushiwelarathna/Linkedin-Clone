import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {} from '@react-native-community/masked-view';


import FirstScreen from './components/FirstScreen';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

export default class App extends Component {
  

  render() {
    return (

      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="FirstScreen" options={{headerShown:false}} component={FirstScreen}/>
      <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn}/>
      <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp}/>
     
      </Stack.Navigator>
    </NavigationContainer>
    
    );
  }
}