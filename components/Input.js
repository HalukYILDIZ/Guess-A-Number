import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    //height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    width: '80%',
    marginVertical: 10,
    fontSize: 20,
  },
});

export default Input;
