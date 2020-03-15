import React, {useState, useRef} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(`minimum:${min} maximum:${max}`);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  console.log(`rndnum:${rndNum}`);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice),
  );
  const currentLow = useRef(1); // component tekrar render olduğunda bunlar yenilenmez
  const currentHigh = useRef(100);

  const nextGuessHandler = direction => {
    console.log(`userchoice:${props.userChoice}`);
    console.log(`currentguess:${currentGuess}`);
    console.log(direction);
    console.log(direction === 'lower' && currentGuess > props.userChoice);
    console.log(direction === 'greater' && currentGuess < props.userChoice);

    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert('dont lie', 'anam');
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
  };
  return (
    <View style={styles.container}>
      <Text>Oppenent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  sreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
