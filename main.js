import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/LoginScreen.js';

class App extends React.Component {
  render() {
    return (
      <LoginScreen />
    );
  }
}

Expo.registerRootComponent(App);
