import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


const apiURL = "https://opentdb.com/api.php?amount=10&category=18&type=multiple"

export default class QuizScreen extends React.Component {

    state ={
      currentQuestion: 0,
      isLoaded: false,
      question: [],
      options: []
    }

    componentDidMount() {
        this.fetchQuestion()
    }

    async fetchQuestion() {
        return fetch(apiURL)
        .then(result=>{

            result.json().then(resultJSON=>{
                //console.log(resultJSON)

                const options = resultJSON.results[this.state.currentQuestion].incorrect_answers;

                const correctAnswer = resultJSON.results[this.state.currentQuestion].correct_answer;

                options.push(correctAnswer) 

                console.log(options)

                this.setState({
                  isLoaded: true,
                  question: resultJSON.results,
                  options: options
                })
            })

        })
        .catch(error=>console.log(error))
    }

  render() {
    if(this.state.isLoaded){
      return(
        <ScrollView style={styles.container}>
          
          <View style={styles.questionContainer}>
  
              <Text style={styles.question}>
  
                  Q. {
                    this.state.question[this.state.currentQuestion].question
                  }
  
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
    } else {
      return(
        <View style={styles.container}>
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#328fa8',
  },
  questionContainer: {
    marginHorizontal:30,
    marginVertical:20,
  },
  question: {
    fontSize: 30,
    color:"#fff",
    textAlign: "center"
  },
  answerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor:"#254c8a",
    padding:20,
    marginVertical: 5,
    borderRadius: 8
  },
  answerText: {
    fontSize: 18,
    color:"#fff",

  }
});
