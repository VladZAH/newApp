import React from 'react';
import logo from './logo.svg';
import './App.css';

const fruits = ['apple', 'bananas', 'cherries', 'coconut'];

const users = [
  { id: 123, name: 'John' },
  { id: 456, name: 'Mary' },
  { id: 789, name: 'Bob' },
  { id: 163, name: 'Jane' },
];

function App() {
  const elements = [];
  for (let i = 0; i < fruits.length; i++) {
    elements.push(
      <li key={fruits[i]}>{fruits[i]}</li>
    );
  }

  return (
    <div className="App">
      <h1>Rendering Dynamic Lists</h1>
      <ul>
        {elements}
      </ul>

      {/* Rendering dynamic lists inline */}
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit}>
              <h2>{fruit}</h2>
            </li>
          );
        })}
      </ul>


      <h4>Users</h4>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>{user.id}: {user.name}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
