import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  console.log(`usernumber:${userNumber}`);
  if (userNumber) {
    console.log(`appjs içinde userNumber:${userNumber}`);
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
