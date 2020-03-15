import React, { Component } from "react";

class Answers extends Component {
  state = {
    choices: this.props.choices,
    answer: ""
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="card w-75 pr-4 pl-4 mb-4 mt=3 pt=3">
          <div className="card-body text-center">
            <h3 className="card-title">{this.props.question}</h3>

            <img src={this.props.image} className="card-img-top" alt="..." />
          </div>
          {this.state.choices.map((choice, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-${
                this.props.showAnswer && choice === this.props.correct
                  ? "success"
                  : "danger"
              } mb-3 mr-3 ml-3`}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
     
    );
  }
}

export default Answers;