import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      description: '',
      favoriteClass: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, type, value, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    // Post the data to some remote server
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
       <form onSubmit={this.handleSubmit}>
         Name:
         <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
         Email:
         <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        Description:
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        Favorite Class:
        <select
          name="favoriteClass"
          value={this.state.favoriteClass}
          onChange={this.handleChange}
        >
          <option value="react">React</option>
          <option value="java">Java</option>
          <option value="node">Node</option>
        </select>

        Is Full Time Student?
        <input
          name="isFullTimeStudent"
          type="checkbox"
          checked={this.state.isFullTimeStudent}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
       </form>
      </div>
    );
  }
}

export default App;
