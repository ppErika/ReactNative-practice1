/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, StatusBar} from 'react-native';

import MyButton from './MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open</Text>
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => alert('Click!!')} />
      <MyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
