import React, { useState, useEffect } from 'react';
import BasketItem from '../basketItem/BasketItem';

const BasketItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('basketItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []); 

	const removeItem = (itemId, selectedSize) => {
		setItems(prevItems => {
			const newItems = prevItems.filter(item => !(item.id === itemId && item.selectedSize === selectedSize));
			localStorage.setItem('basketItems', JSON.stringify(newItems));
			return newItems;
		});
	};
	

	const updateQuantity = (itemId, newQuantity, selectedSize) => {
    setItems(prevItems => {
      const newItems = prevItems.map(item => {
        if (item.id === itemId && item.selectedSize === selectedSize) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      localStorage.setItem('basketItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <BasketItem key={index} item={item} onQuantityChange={updateQuantity} remove = {removeItem}/>
      ))}
    </div>
  );
}

export default BasketItemList;
