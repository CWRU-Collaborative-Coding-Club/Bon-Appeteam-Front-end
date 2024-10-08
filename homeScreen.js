// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('personalInfoScreen')} />
    </View>
  );
};

export default HomeScreen;