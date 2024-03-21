import React from 'react';
import MyButton from '../button/MyButton';

const CountControl = ({count, onIncrement, onDecrement }) => {
	return (
    <div>
      <MyButton onClick={onIncrement}>+</MyButton>
      <p>{count}</p>
      <MyButton onClick={onDecrement}>-</MyButton>
    </div>
  );
}

export default CountControl;
