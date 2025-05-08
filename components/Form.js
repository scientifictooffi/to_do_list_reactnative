import React, {useState} from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function Form({addHandler}) {
    const [text, setValue] = useState('');


    const onchange = (text) => {
        setValue(text);
    };

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onchange} placeholder='type your text' />
        <Button color='green' onPress={() => addHandler(text)} title="Add work"/>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});
