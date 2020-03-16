import React from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Game is Over</Text>
      <Image
        source={require('../assets/images.png')}
        style={styles.image}
        resizeMode="center"
      />
      <Text style={styles.text}>Rounds Number is {props.roundsNumber}</Text>
      <Text style={styles.text}>UserNumber was {props.userNumber}</Text>
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
  image: {
    width: '80%',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
});

export default GameOverScreen;
