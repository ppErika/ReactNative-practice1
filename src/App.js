/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import MyButton from './MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton title={123} onPress={ ()=>alert('1') }/>
      <MyButton title="MyButton title2" onPress={ ()=>alert('2') }>MyButton3</MyButton>
      <MyButton>Children</MyButton>
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
