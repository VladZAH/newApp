import React from 'react';

function PlayerChoice({ name, image, onClick }) {
  return (
    <img
      style={{ width: 200, border: '2px solid red' }}
      src={image}
      onClick={() => onClick(name)}
    />
  );
}

export default PlayerChoice;