import React from 'react';

function TodoButton({ onButtonClick }){
  return (
   <button
    id="my-button"
    onClick={onButtonClick}>my button</button>
  )
  
}

export default TodoButton;
