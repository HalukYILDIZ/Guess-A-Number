import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.headerTitle, ...props.style}}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 20,
    padding: 18,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
