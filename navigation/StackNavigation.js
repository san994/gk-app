import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import{createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTabNavigation';
import FactCard from '../screens/FactCard';

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component{
render() {
  return (
   <Stack.Navigator>
     <Stack.Screen name={"home"} component={BottomTab}/>
     <Stack.Screen name={"storycard"} component={FactCard}/>
   </Stack.Navigator>
  );
}
}