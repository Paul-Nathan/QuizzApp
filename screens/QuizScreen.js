import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const apiURL = "https://opentdb.com/api.php?amount=10&category=18&type=multiple"

export default class QuizScreen extends React.Component {

    componentDidMount() {
        this.fetchQuestion()
    }

    async fetchQuestion() {
        return fetch(apiURL)
        .then(result=>{

            result.json().then(resultJSON=>{
                console.log(resultJSON)
            })

        })
        .catch(error=>console.log(error))
    }

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
