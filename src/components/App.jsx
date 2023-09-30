import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtn = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  onNeutralBtn = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onBadBtn = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const feedBack = (this.state.good / this.countTotalFeedback()) * 100;
    return feedBack;
  };

  render() {
    return (
      <div>
        <div>
          <p>Please leave feedback</p>
          <button type="button" onClick={this.onGoodBtn}>
            Good
          </button>
          <button type="button" onClick={this.onNeutralBtn}>
            Neutral
          </button>
          <button type="button" onClick={this.onBadBtn}>
            Bad
          </button>
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive feedback:{' '}
              {this.state.good &&
                this.countPositiveFeedbackPercentage().toFixed()}
              %
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
