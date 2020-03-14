import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.inputContainer, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    width: '80%',
    margin: 15,
    fontSize: 20,
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    margin: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    //borderBottomWidth: 1,
    // marginBottom: 10,
    padding: 20,
    margin: 15,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default Card;
