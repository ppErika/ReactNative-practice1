import React from 'react';
import {StyleSheet, View} from 'react-native';
import Shadow from './Shadow';

export default function App() {
  return (
    <View style={styles.container}>
      <Shadow />
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
