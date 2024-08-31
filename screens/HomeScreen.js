import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate("QuizScreen")
          }}
          style={styles.button}
        >

          <Text style={styles.buttonText}>Start Quiz</Text>

        </TouchableOpacity>
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
  button: {
    backgroundColor: "#254c8a",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
  }
});