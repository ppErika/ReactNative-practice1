import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Box from './Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: 'red', height: 100}} />
      <Box style={{backgroundColor: 'green', flex: 2}} />
      <Box style={{backgroundColor: 'blue', flex: 1}} />
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
