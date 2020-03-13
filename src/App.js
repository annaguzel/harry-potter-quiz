import React, {Component} from "react";
import Data from "./Data";
import Question from "./Question";
import Result from "./Result"
import bg from "./images/bg.jpg"

class App extends Component {
    state = {
        questionsData: [],
        score: 0,
        attempts : 0
    }

    getQuestions = () => {
        Data().then(questions => {
            this.setState({
                questionsData : questions
            });
        });
    }

    countAnswers = (answer, correct) => {
        let score = this.state.score;
        let attempts = this.state.attempts;
        if(answer === correct){
            ++score;
        }
        this.setState({
            score: score,
            attempts: ++attempts
        });
    }

    resetGame = () => {        
        this.setState({
            score: 0,
            attempts: 0,
            questionsData:[]
        });
        this.getQuestions();
    }

    componentDidMount() {
        this.getQuestions();
    }


    render() {
        return (
        <div  style={{ backgroundImage:`url(${bg})` }} className="text-cent">
        <nav class="navbar navbar-light bg-light">
            <h2><a className="nav-link" href="#">Harry Potter Quiz</a></h2>
            <button type="button" className="btn btn-warning" onClick={this.resetGame}>Reload</button>
           </nav>

        <div className="container mt-3">
 
        
            { this.state.questionsData.length > 0 
            && this.state.attempts < 5 
            && this.state.questionsData.map(
                ({question, answers, correct, questionId,image}) => 
                    <Question question={question} 
                        choices={answers} 
                        correct={correct} 
                        key={questionId} 
                        image={image}
                        onSelection= {answer => this.countAnswers(answer, correct)} /> 
            )}
            {
                this.state.attempts === 5 && <Result score={this.state.score} reset={this.resetGame}/>
            }
        </div>
        </div>
        );
    }
} 
export default App;