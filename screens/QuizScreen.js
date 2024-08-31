import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


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
      <ScrollView style={styles.container}>
        
        <View style={styles.questionContainer}>

            <Text style={styles.question}>

                Q. Sample question will be here

            </Text>

        </View>

        <View style={styles.answerComtainer}>

            <TouchableOpacity onPress={()=>{}} style={styles.button}> 
                <Text style={styles.answerText}>Answer 1</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}} style={styles.button}> 
                <Text style={styles.answerText}>Answer 2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}} style={styles.button}> 
                <Text style={styles.answerText}>Answer 3</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{}} style={styles.button}> 
                <Text style={styles.answerText}>Answer 4</Text>
            </TouchableOpacity>

        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#328fa8',
  },
  questionContainer: {},
  question: {},
  answerContainer: {},
  button: {},
  answerText: {}
});
