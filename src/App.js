import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles, orangeText} from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, orangeText]}>Style Code</Text>
      <Text style={[styles.text, styles.errorText]}>Error Text</Text>
    </View>
  );
}
