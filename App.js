import React, { Component } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#0abde3' }}>
      </View>
      <Text>Ariya</Text>
      <Agustian></Agustian>
      <Photo></Photo>
      <TextInput style={{ borderWidth: 2 }}></TextInput>
      <BoxGreen></BoxGreen>
      <Profile></Profile>
    </View>
  );
};

const Agustian = () => {
  return <Text>Agustian Riyadhi</Text>;
};

const Photo = () => {
  return <Image source={{ uri: 'https://placeimg.com/100/100/animals' }} style={{ width: 100, height: 100 }}></Image>;
};

class BoxGreen extends Component {
  render() {
    return <Text>Component Dari Class</Text>
  }
};

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://placeimg.com/100/100/tech' }} style={{ width: 100, height: 100 }}></Image>
        <Text>Component Profile</Text>
      </View>
    )
  }
}




export default App;