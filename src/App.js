import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import MyButton from './MyButton';

export default function App() {
  const [addition, setAddition] = useState(0);
  const [multiple, setmultiple] = useState(1);

  return (
    <View style={styles.container}>
      <TextInput
        // onChange={(event) => console.log(event.nativeEvent.text)}
        // input의 Text만 원하면 onChangeText를 활용하는 것이 더 나음 (위 아래 지금 같은 코드)
        onChangeText={text=>console.log(text)}
        style={{borderWidth: 1, padding: 10, fontSize: 20}}
      />
      {/* <Text style={{fontSize: 20}}>{addition}</Text>
      <Text style={{fontSize: 20}}>{multiple}</Text>
      <MyButton title="addition" onPress={()=>setAddition(addition+2)}/>
      <MyButton title="multiple" onPress={()=>setmultiple(multiple*2)}/> */}
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
