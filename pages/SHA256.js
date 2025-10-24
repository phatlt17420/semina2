// Generate SHA256 Encoded Hash in React Native
// https://aboutreact.com/generate-sha256-encoded-hash-in-react-native/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {sha256} from 'react-native-sha256';

const SHA256 = () => {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const convertSHA = () => {
    //Encode SHA256
    sha256(inputText).then((hash) => {
      setText(hash);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Generate SHA256 Encoded Hash in React Native
        </Text>
        <Text style={styles.textStyle}>{text}</Text>
        <Text style={styles.textStyle}>
          Please insert any value to convert in SHA 256
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (inputText) => setInputText(inputText)
          }
          placeholder="Enter Any Value"
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={convertSHA}
        >
          <Text style={styles.buttonTextStyle}>
            Conver to SHA 256
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default SHA256;

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