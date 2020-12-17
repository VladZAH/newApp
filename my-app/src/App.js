import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import Profile2 from './Profile2';

function handleClick() {console.log('click')};

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentTime: new Date(),
      clickCount: 0,
      color: "blue"  
    }
  }

  handleClick = this.handleClick.bind(this);
  handleClick() {
    console.log('click')
    this.setState({clickCount: this.state.clickCount + 1});
  };


  componentDidMount(){
    setInterval(() => {
      console.log('didmount');
      this.setState({currentTime: new Date()});
      console.log(this.state);
    }, 1000);
  }
  
  changeColor = this.changeColor.bind(this);

  changeColor(){
    if(this.state.color === 'blue'){
      this.setState({color: 'red'}); 
    }else{
      this.setState({color: 'blue'});
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edited 123456 
          </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          <Profile firstName='Vlad' imageURL='https://cdn2-www.dogtime.com/assets/uploads/2016/09/rottweiler-puppy-1-e1553630142158.jpg' />
          <Profile2 firstName='John' imageURL='https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg' />
          <p>{this.state.currentTime.toString()} </p>
          <button style={{backgroundColor: this.state.color}} onClick={this.handleClick} onMouseLeave={this.changeColor} onMouseEnter={this.changeColor}>Click Me</button>
          Counter: {this.state.clickCount}
        </header>
      </div>
    );
  }
}

export default App;
