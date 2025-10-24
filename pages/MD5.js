// Example to Convert any Input Value in MD5 in React Native
// https://aboutreact.com/md5-in-react-native/

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Import thư viện md5
import md5 from 'md5';

const MD5 = () => {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const convertMD5 = () => {
    const encodedVal = md5(inputText);
    setText(encodedVal);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Example to Convert any Input Value in MD5 in React Native
        </Text>

        <Text style={styles.textStyle}>{text}</Text>

        <Text style={styles.textStyle}>
          Please insert any value to convert to MD5
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={(value) => setInputText(value)}
          placeholder="Enter any value"
          value={inputText}
        />

        <TouchableOpacity style={styles.buttonStyle} onPress={convertMD5}>
          <Text style={styles.buttonTextStyle}>Convert to MD5</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MD5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
