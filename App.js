import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from "firebase"
import { firebaseConfig } from './config';

import DashBoard from './screens/DashBoard';
import LoadingScreen from './screens/Loading';
import LogInScreen from './screens/LogIn'; 

import { createSwitchNavigator, createAppContainer } from "react-navigation";

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LogInScreen: LogInScreen,
  DashBoard: DashBoard
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default class App extends React.Component {
  render(){
  return (
    <AppNavigator/>
  );
  }
}