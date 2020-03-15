import React, { Component } from "react";
import Data from "./Data";
import Question from "./Question";
import Result from "./Result";
import bg from "./images/bg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Answers from "./Answers";
class App extends Component {
  state = {
    questionsData: Data(),
    score: 0,
    attempts: 0
    // answers: []
  };

  getQuestions = () => {
    this.setState({
      questionsData: Data()
    });
  };

  countAnswers = (answer, correct) => {
    let score = this.state.score;
    let attempts = this.state.attempts;
    // let answers = this.state.answers;
    if (answer === correct) {
      ++score;
    }
    // answers = answers.push(answer);
    this.setState({
      score: score,
      attempts: ++attempts
      // answers: answers
    });
  };

  resetGame = () => {
    this.setState({
      score: 0,
      attempts: 0,
      questionsData: []
    });
    this.getQuestions();
  };

  render() {
    return (
      <div style={{ backgroundImage: `url(${bg})` }} className="text-cent">
        <nav class="navbar navbar-light bg-light">
          <h2>
            <a className="nav-link" href="#">
              Harry Potter Quiz
            </a>
          </h2>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.resetGame}
          >
            Reload
          </button>
        </nav>

        <div className="container mt-3">
          {this.state.questionsData.length > 0 &&
            this.state.attempts < 5 &&
            this.state.questionsData.map(
              ({ question, answers, correct, questionId, image }) => (
                <Question
                  question={question}
                  choices={answers}
                  correct={correct}
                  // showAnswer={false}
                  key={questionId}
                  image={image}
                  onSelection={answer => this.countAnswers(answer, correct)}
                />
              )
            )}
          {this.state.attempts === 5 && (
            <Result
              score={this.state.score}
              reset={this.resetGame}
              // answers={this.state.answers}
            />
          )}
          {this.state.attempts === 5 &&
            this.state.questionsData.map(
              ({ question, answers, correct, questionId, image }) => (
                <Answers
                  question={question}
                  choices={answers}
                  correct={correct}
                  showAnswer={true}
                  key={questionId}
                  image={image}
                />
              )
            )}
        </div>
      </div>
    );
  }
}
export default App;