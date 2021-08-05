import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = ({title, onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{backgroundColor:'red', padding: 10, margin: 10}}>
                {/* children이 우선순위가 더 높아서 children이 있으면 그걸 출력, 없으면 title */}
                <Text style={{fontSize: 20, color:'white'}}>{children || title}</Text>
            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps={
    title: 'default',
    onPress: () => alert('default'),
}

export default MyButton;