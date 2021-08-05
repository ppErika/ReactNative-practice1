import React from 'react';
import {StyleSheet, View, Platform, Text} from 'react-native';

const Shadow = () => {
  return (
    <View style={styles.shadow}>
      {/* 현재 동작중인 플랫폼 확인하기 */}
      <Text>{Platform.OS === 'ios' ? 'ios' : 'android'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 200,
    ...Platform.select({
      ios: {
        backgroundColor: 'blue',
        shadowColor: '#000000',
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        backgroundColor: 'green',
        elevation: 20, // 안드로이드를 위해
      },
    }),
  },
});

export default Shadow;
