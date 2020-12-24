import React, { Component } from 'react';
import paperImage from './assets/paper.jpg';
import rockImage from './assets/rock.jpg';
import scissorsImage from './assets/scissors.jpg';
import './App.css';
import PlayerChoice from './PlayerChoice';

const CHOICES = ['paper', 'scissors', 'rock'];

function generateComputerChoice() {
  const randomNum = Math.random() * 3;
  const roundedNum = Math.floor(randomNum); //  0, 1 or 2
  return CHOICES[roundedNum];
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerScore: 0,
      computerScore: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOption = this.handleClickOption.bind(this);
  }

  componentDidUpdate() {
    if (this.state.playerScore === 5) {
      alert('Player wins!');
    } else if (this.state.computerScore === 5) {
      alert('Computer wins!');
    }
  }

  handleClick() {
    // this.state.playerScore = this.state.playerScore+ 1; WRONG, never assign directly to state
    this.setState({
      playerScore: 0,
      computerScore: 0
    });
  }

  handleClickOption(playerChoice) {
    const computerChoice =  generateComputerChoice();
    if (playerChoice === computerChoice) return;

    if (
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      // Player wins the round
      this.setState({ playerScore: this.state.playerScore + 1 });
    } else {
      // Computer wins the round
      this.setState({ computerScore: this.state.computerScore + 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Scoreboard</h1>
          <div>
            Player Score: {this.state.playerScore}
          </div>
          <div>
            Computer Score: {this.state.computerScore}
          </div>
        </div>
        <div>
          <button onClick={this.handleClick}>Reset</button>
        </div>
  
        <PlayerChoice
          name="paper"
          image={paperImage}
          onClick={this.handleClickOption}
        />
        <PlayerChoice
          name="rock"
          image={rockImage}
          onClick={this.handleClickOption}
        />
        <PlayerChoice
          name="scissors"
          image={scissorsImage}
          onClick={this.handleClickOption}
        />
      </div>
    );
  }
}

export default App;
