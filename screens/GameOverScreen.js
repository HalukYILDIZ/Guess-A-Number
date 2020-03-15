import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>{props.roundsNumber}</Text>
      <Text>{props.userNumber}</Text>
      <Button title="New Game" onPress={props.newGameStarter} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameOverScreen;
