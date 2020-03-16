import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>The Game is Over</Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={800}
          source={require('../assets/images.png')}
          style={styles.image}
          resizeMode="center"
        />
      </View>
      <Text style={styles.text}>Rounds Number is {props.roundsNumber}</Text>
      <Text style={styles.text}>UserNumber was {props.userNumber}</Text>
      <MainButton title="New Game" onPress={props.newGameStarter}>
        New Game
      </MainButton>
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
    width: '100%',
    height: '100%',
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
  },
  imageContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    borderRadius: 100, //radius yüksekliğin yarısı olursa tam daire olur
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden', //resmin taşmasını engeller
    marginBottom: 10,
  },
});

export default GameOverScreen;
