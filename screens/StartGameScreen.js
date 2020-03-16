import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4,
  );

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, '')); // g globaly tüm text'i gezer ve 0-9 dışındaki tüm değerleri boş kabul eder
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  useEffect(() => {
    //useEffect'i addlisner ın sürekli dinlemede olmasını istemediğimiz için kullandık
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };

    Dimensions.addEventListener('change', updateLayout); //ekran yatırıldığında boyutları tekrar ayarlanmasını sağlar
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.selectedNumberView}>
        <Text>Your selected number is</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          title="Start the game!"
          onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number should be in  0-99.', [
        {text: 'okay', style: 'destructive', onPress: resetInputHandler},
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={90}>
        <TouchableWithoutFeedback // EKranın herhangi bir yerine dokunulduğunda keyboardu kapatmak için kullanıldı
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.screen}>
            <Text style={styles.title}>Start New Game</Text>
            <Card>
              <Text>Select a Number</Text>
              <Input
                style={styles.input}
                keyboardType="number-pad"
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}
              />
              <View style={styles.buttonContainer}>
                <View style={{width: buttonWidth}}>
                  <Button
                    title="reset"
                    color={Colors.primary}
                    onPress={resetInputHandler}
                  />
                </View>
                <View style={{width: buttonWidth}}>
                  <Button
                    title="confirm"
                    color={Colors.accent}
                    onPress={confirmInputHandler}
                  />
                </View>
              </View>
            </Card>
            {confirmedOutput}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectedNumberView: {
    width: '70%',
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    marginVertical: 5,
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
