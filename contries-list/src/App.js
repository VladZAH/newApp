import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contries: [],
      isLoading: true
    }
  }

  componentDidMount(){
    Axios.get('https://restcountries.eu/rest/v2/all')
    .then(this.handleSuccess)
    .catch(this.handleError)
  }

  handleError = (error) => {
    console.log(error);
  }

  handleSuccess = (response) => {
    let important = [];
    response.data.map(el => {
      important.push(el);
    })
    this.setState({contries: important, isLoading: false})
  }

  render(){
    return (
      <div className="App">
        {this.state.isLoading && (<p>Loading</p>)}
        <h1 style={{fontSize: '30px'}} >COUNTRIES</h1>
        {this.state.contries.map(el => {
          return (
            <div key={el.name}>
              {el.name}, capital: {el.capital}, region: {el.region};
            </div>
          );
        })}
      </div>
    );
  }

}

export default App;
