import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <Text style={styles.selectedNumberStyle}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    alignContent: 'center',
  },
  selectedNumberStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    alignContent: 'center',
  },
});

export default NumberContainer;
