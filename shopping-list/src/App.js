import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      itemsList: [],
      newItem: ''
    }
  }

  handleAdd = (e) => {
    e.preventDefault();

    let list = this.state.itemsList;
    let item  =this.state.newItem;

    if (list.includes(item)) {
      alert(`You already have ${item} in your list!`)
      this.setState({newItem: ''});
    } else if (item.trim() !== '' ) {
      this.setState({itemsList: [item, ...list], newItem: ''});
    } else {
      this.setState({newItem: ''});
    }
  }

  handleInput = (e) => {
    this.setState({newItem: e.target.value}) 
  }

  deleteItem = (el) => {
    let newState = this.state.itemsList;
    let ind = newState.indexOf(el);
    newState.splice(ind, 1);
    this.setState({itemsList: newState});
  }

  render(){
    return (
      <div className="App">
        <h1>
          Shopping List
        </h1>
        <div>
          <form onSubmit={this.handleAdd} > 
            <input 
              className='input' 
              type='text' 
              value={this.state.newItem} 
              onChange={this.handleInput} 
              placeholder='Type your item in here' 
            >
            </input>
            <button className="button-add" type='submit'>
              Add To Shopping List
            </button>
          </form>          
        </div>
        <div className='list'>
          {this.state.itemsList.map((el) => {
            return (
              <div key={el} className='item'>
                <p className='text' >
                  {el}
                  <button className='button-delete' onClick={() => {this.deleteItem(el)}}>
                   <strong>DELETE</strong>
                  </button>
                </p> 
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
