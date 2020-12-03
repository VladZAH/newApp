import React from 'react'; 
import './App.css';
import Display from "./components/Display";
import Game from "./components/Game";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      you: 0,
      computer: 0,
      cmpChoice: null,
      yourChoice: null,
      border: "4px solid green"
    }
  }

  
  reset = () => {
    this.setState({you: 0, computer: 0, yourChoice: null, cmpChoice: null});
  }

  winner = () => {
    if(this.state.computer === 5){
      alert("Computer won! 🤖 ")
      this.reset();
    }else if(this.state.you === 5){
      alert("Congratulations, you won! 🤠 ")
      this.reset();
    }
  }

  pickRandom = (pick) => {
      let chs = ['rock', 'paper', 'scissors'];
      let random = chs[Math.floor(Math.random() * 3)];  
      if((pick === "rock" && random === "paper") || (pick === "paper" && random === "scissors") || (pick === "scissors" && random === "rock")){
        this.setState({cmpChoice: random, yourChoice: pick, computer: this.state.computer + 1});
      }else if((pick === "paper" && random === "rock") || (pick === "scissors" && random === "paper") || (pick === "rock" && random === "scissors")){
        this.setState({cmpChoice: random, yourChoice: pick, you: this.state.you + 1});
      }else{
        this.setState({cmpChoice: random, yourChoice: pick});
      }
  }
  
  componentDidUpdate(){
    setTimeout(() => {
      if(this.state.you === 5 || this.state.computer === 5){
        this.winner();
      }
    }, 1)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <a onClick={() => {this.pickRandom("rock")}}><Display img="rock" /></a>
            <a onClick={() => {this.pickRandom("paper")}}><Display img="paper" /></a>
            <a onClick={() => {this.pickRandom("scissors")}}><Display img="scissors" /></a>
          </div>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <p style={{width: '50%'}}>PLAYER<br/>{this.state.you}<br/></p>
            <p style={{width: '50%'}}>COMPUTER<br/>{this.state.computer}<br/></p>
          </div>
          <div>
          <Game cimage={this.state.cmpChoice ? this.state.cmpChoice : null} yourimage={this.state.yourChoice}/>
          <button style={{height: '50px', width: '200px', backgroundColor: 'gainsboro', fontSize: '30px'}} onClick={this.reset}>RESET</button>
          </div>
        </header>
      </div>
    );    
  }
}

export default App;
