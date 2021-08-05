import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({title, onPress, children, title2 }) => {
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
};
MyButton.PropTypes={
    title: PropTypes.string,
    onPress: PropTypes.func,
    // isRequired는 필수항목 설정할 때 사용
    // title2: PropTypes.string.isRequired,
};

export default MyButton;