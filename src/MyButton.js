import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = () => {
    return (
        <TouchableOpacity onPress={()=>alert('MyButton')}
        hitSlop={{bottom:100, top: 100, left: 100, right: 100 }}
        pressRetentionOffset={{bottom: 10, top: 10, left: 10, right: 10}}
        >
            {/* 공간을 차지하지 않으면서 마진과 같은 효과(버튼 클릭 인정의 넓은 범위)를 주고싶을 때 hitSlop 사용 */}
            {/* 버튼을 잘못눌렀을 때 일정 범위를 벗어나면 취소한 효과를 주고 싶을 때 pressRetentionOffset 사용 */}
            <View style={{backgroundColor:'red', padding: 10}}>
                <Text style={{fontSize: 20, color:'white'}}>MyButton</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MyButton;