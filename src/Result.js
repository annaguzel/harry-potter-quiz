
import React, { Component } from "react";
import result from "./images/result.jpg";

class Result extends Component {
  render() {
    return (
        <div className="card w-75 mx-auto mb-3">
          <div className="card-body text-center">
            <img src={result} className="card-img-top w-75" alt="..." />
            <h2 className="card-title mt-3">
              Your score is {this.props.score} / 5!!!
            </h2>

            <button
              type="button"
              className="btn btn-warning mb-2 mt-3"
              onClick={this.props.reset}
            >
              Play again!!!
            </button>
          </div>
        </div>
    
    );
  }
}
export default Result;