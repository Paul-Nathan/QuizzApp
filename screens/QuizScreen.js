import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QuizScreen extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text>QuizScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#328fa8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
