import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({title, onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('press')}
      onPressIn={() => console.log('in')}
      onPressOut={() => console.log('out')}
      onLongPress={() => console.log('long')}
      delayLongPress={3000}>
      <View style={{backgroundColor: 'red', padding: 10, margin: 10}}>
        {/* children이 우선순위가 더 높아서 children이 있으면 그걸 출력, 없으면 title */}
        <Text style={{fontSize: 20, color: 'white'}}>{children || title}</Text>
      </View>
    </TouchableOpacity>
  );
};

MyButton.defaultProps = {
  title: 'default',
  onPress: () => alert('default'),
};
MyButton.PropTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default MyButton;
