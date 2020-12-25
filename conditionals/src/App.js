import React from 'react';
import logo from './logo.svg';
import './App.css';

const product = {
  isPrime: false,
  title: 'Harry Potter Vol1',
  // freeShipping: true,
  shippingCost: 20
};

function App() {
  
  let primeBadge;
  if (product.isPrime) {
    primeBadge = <h3>PRIME</h3>;
  } else {
    primeBadge = <h3 style={{ color: 'red' }}>NOT PRIME</h3>
  }

  return (
    <div className="App">
      <h1>Conditional</h1>
      <h2>{product.title} - {primeBadge}</h2>
      {product.freeShipping && (
        <h3>FREE SHIPPING</h3>
      )}
      {product.shippingCost === 0 ? (
        <h4>FREE</h4>
      ) : (
        <h4 style={{ color: 'blue' }}>${product.shippingCost}</h4>
      )}
    </div>
  );
}

export default App;
