import React, { useReducer } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import firebase from "firebase"
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddFactScreen extends React.Component{
constructor(){
    super()
    this.state={
        fact:"",
        likes:""
    }
}


addFact=async()=>{
if(this.state.fact){
  await firebase
  .database()
  .ref(
    "/posts/" +
      Math.random()
        .toString(36)
        .slice(2)
  )
  .set({
    name:firebase.auth().currentUser.displayName,
    fact:this.state.fact,
    likes:this.state.likes,
    auther_uid:firebase.auth().currentUser.uid
  })
}
}
render() {
  return (
    <View>
      <Text>AddFact</Text>
      <View>
          <TextInput
           onChangeText={(text)=>this.setState({fact:text})}
           placeholder={"add fact"}
           multiline={true}
           numberOfLines={10}
          />
      </View>
      <View>
          <TouchableOpacity
           onPress={()=>this.addFact()}
          >
          <Text>submit</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
}