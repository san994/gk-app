import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import firebase from "firebase";

export default class FactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //fontsLoaded: false,
      //light_theme: true,
      story_id:this.props.story.key,
      story_data:this.props.story.value,
     // is_liked:false,
      //likes:this.props.story.value.likes
    };
  }

  
  render() {

      return (
        <TouchableOpacity>
          <SafeAreaView  />
          <View
            
          >
            
            <View>
              <Text
               
              >
                {story.name}
              </Text>
              <Text
                
              >
                {story.fact}
              </Text>
              
            </View>

            
          </View>
        </TouchableOpacity>
      );
    }
  }




