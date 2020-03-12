import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Card from '../components/Card';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default StartGameScreen;
