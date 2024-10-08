import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';




const apiURL = "https://opentdb.com/api.php?amount=10&category=18&type=multiple"

export default class QuizScreen extends React.Component {

    state ={
      currentQuestion: 0,
      isLoaded: false,
      questions: [],
      options: [],
      correctAnswer:"",
      score: 0
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

            this.setState({
              isLoaded: true,
              questions: resultJSON.results,
              options: options,
              correctAnswer: correctAnswer,
            })
            })

        })
        .catch(error=>console.log(error))
        ;
    }

    checkAnswer(selectedAnswer) {



      // change question
      let currentQuestion = this.state.currentQuestion
      currentQuestion += 1
      if(currentQuestion < this.state.questions.length){
        if(this.state.correctAnswer == selectedAnswer) {
          console.log("It's correct")

          let score = this.state.score
          score+=1
          this.setState({
            score
          })
        }else{
          console.log("It's not correct")
        }

            

          const options = this.state.questions[currentQuestion].incorrect_answers;

          const correctAnswer = this.state.questions[currentQuestion].correct_answer;

          options.push(correctAnswer)

          this.setState({
            currentQuestion,
            options,
            correctAnswer
          })

          
        }else {

          this.props.navigation.navigate("ResultScreen", {
            score: this.state.score
          })

        }
        
    }

  render() {
    if(this.state.isLoaded){
      return(
        <ScrollView style={styles.container}>
          
          <View style={styles.questionContainer}>
  
              <Text style={styles.question}>
  
                  Q. {
                    this.state.questions[this.state.currentQuestion].question
                  }
  
              </Text>
  
          </View>
  
          <View style={styles.answerContainer}>
  
              <TouchableOpacity onPress={()=>{
                this.checkAnswer(this.state.options[0])
              }} style={styles.button}> 
                  <Text style={styles.answerText}>
                    {this.state.options[0]} 
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity onPress={()=>{
                this.checkAnswer(this.state.options[1])
              }} style={styles.button}> 
                  <Text style={styles.answerText}>
                    {this.state.options[1]}
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity onPress={()=>{
                this.checkAnswer(this.state.options[2])
              }} style={styles.button}> 
                  <Text style={styles.answerText}>
                  {this.state.options[2]}
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity onPress={()=>{
                this.checkAnswer(this.state.options[3])
              }} style={styles.button}> 
                  <Text style={styles.answerText}>
                  {this.state.options[3]}
                  </Text>
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
