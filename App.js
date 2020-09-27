import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ width: 80, height: 80, backgroundColor: '#0abde3' }}>
      </View>
      <Text>Ariya</Text>
      <Agustian></Agustian>
      <Photo></Photo>
      <TextInput style={{borderWidth:2}}></TextInput>
    </View>
  );
};

const Agustian = () => {
  return <Text>Agustian Riyadhi</Text>;
};
const Photo = () => {
  return <Image source={{uri:'https://placeimg.com/100/100/animals'}} style={{width:100, height:100}}></Image>;
};

export default App;