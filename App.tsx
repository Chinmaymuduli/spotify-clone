import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import Routes from './Routes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
