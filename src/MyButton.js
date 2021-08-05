import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = () => {
    return (
        <TouchableOpacity onPress={()=>alert('MyButton')}>
            {/* 마진을 넉넉하게 줘서 버튼을 직접적으로 누르지 못했어도 누른 효과를 줄 수 있다(버튼이 너무 작을 때 사용) */}
            <View style={{backgroundColor:'red', padding: 10, margin: 100}}>
                <Text style={{fontSize: 20, color:'white'}}>MyButton</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;