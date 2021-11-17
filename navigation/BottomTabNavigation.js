import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import FeedScreen from '../screens/Feed';
import SearchScreen from '../screens/Search';
import AddFactScreen from '../screens/AddfFact';


const Tab = createBottomTabNavigator()

export default class BottomTab extends React.Component{
render() {
  return (
   <Tab.Navigator>
       <Tab.Screen name={"feed"} component={FeedScreen}/>
       <Tab.Screen name={"Search"} component={SearchScreen}/>
       <Tab.Screen name={"addFact"} component={AddFactScreen}/>
   </Tab.Navigator>
  );
}
}