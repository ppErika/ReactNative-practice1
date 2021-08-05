import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{backgroundColor:'red', padding: 10, margin: 10}}>
                {/* children이 우선순위가 더 높아서 children이 있으면 그걸 출력, 없으면 title */}
                <Text style={{fontSize: 20, color:'white'}}>{props.children || props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;