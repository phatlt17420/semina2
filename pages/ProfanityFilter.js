// Profinity Filter in React Native - To Remove bad words
// https://aboutreact.com/react-native-profanity-filter/

// Import React
import React, {useState} from 'react';

// Import all the required components
import {
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
  Text
} from 'react-native';

// Import profanity filter
import Filter from 'bad-words';

const ProfanityFilter = () => {
  let [inputValue, setInputValue] = useState('');

  const filter = new Filter();

  const handleInput = (value) => {
    setInputValue(value);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Profinity Filter in React Native
          {'\n'}
          To Remove Bad Words
        </Text>
        <Text style={styles.insertedTextStyle}>
          {inputValue ? filter.clean(inputValue) : ''}
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={handleInput}
          placeholder={'Pleas Enter any Value'}
          style={styles.inputStyle}
        />
        <Text style={styles.textStyle}>
          Please insert any string with bad word in input {' '}
          and you will see it filtered out
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 150,
  },
  textStyle: {
    marginVertical: 10,
    textAlign: 'center',
  },
  insertedTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  inputStyle: {
    width: '100%',
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
  },
});

export default ProfanityFilter;