import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import firebase from "firebase"

import FactCard from './FactCard';

export default class FeedScreen extends React.Component{
constructor(){
  super()
  this.state={
    stories:[]
  }
}

componentDidMount(){
  this.fetchStories()
}

fetchStories = () => {
    firebase
      .database()
      .ref('/posts/')
      .no("value",
      snapshot=>{
        let facts = []
        if(snapshot.val()){
          Object.keys(snapshot.val()).forEach(key=>{
            facts.push({
              key:key,
              value:snapshot.val()[key]
            })
          })
        }
        this.setState({stories:facts})
      })
  };

keyExtractor=(item,index)=>{
  index.toString()
}

renderItem=({item:story})=>{
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

render() {
  return (
    <View>
      <View>
        <FlatList
         keyExtractor={this.keyExtractor}
         date={this.state.stories}
         renderItem={this.renderItem}
        />
      </View>
    </View>
  );
}
}