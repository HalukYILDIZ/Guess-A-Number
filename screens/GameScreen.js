import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
//import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const plusIcon = <Icon name="plus" size={30} color="white" />;
const minusIcon = <Icon name="minus" size={30} color="white" />;

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min + 1, max - 1, exclude);
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
  const [rounds, setRounds] = useState(0);

  const {userChoice, onGameOver} = props; // props.userChoice yerine userChoice kullanabilirim.

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver, rounds]);
  //yukarısının çalıştığı her durumda bu fonksiyon çalışacaktır
  // ikinci parametre olarak verilen currntguess değeri değiştiğinde fonksiyon çalışacaktır.

  const nextGuessHandler = direction => {
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
    setRounds(curRounds => curRounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Oppenent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          {minusIcon}
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
          {plusIcon}
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '80%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GameScreen;
