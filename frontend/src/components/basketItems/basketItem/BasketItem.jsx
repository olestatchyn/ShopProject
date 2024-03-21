import React from 'react';
import MyButton from '../../UI/button/MyButton';
import CountControl from '../../UI/count-control/CountControl';

const BasketItem = ({onQuantityChange, item, remove}) => {
	const handleIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1, item.selectedSize);
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1, item.selectedSize);
    }
  };
	return (
    <div>
      <MyButton onClick={()=>remove(item.id, item.selectedSize)}>-</MyButton>
      <img src="" alt="" />
      <span>{item.name}</span>
      <p>{item.description}</p>
      <p>{item.selectedSize}</p>
      <CountControl count={item.quantity} onIncrement={handleIncrement} onDecrement={handleDecrement}/>
    </div>
  );
}

export default BasketItem;
