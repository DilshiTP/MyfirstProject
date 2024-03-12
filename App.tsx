/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AppNavigation from './src/Navigations/AppNavigation';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <View style={sty.container}>
      <AppNavigation/>
    </View>
  ); 
} 

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default App;
