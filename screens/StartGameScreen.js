import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card>
        <Text>Select a Number</Text>
        <Input style={styles.input} keyboardType="number-pad" maxLength={4} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="reset" color={Colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title="confirm" color={Colors.accent} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '40%',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 20,
  },
  input: {
    borderBottomWidth: 2,
    //borderBottomColor: 'yellow',
    width: '20%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
