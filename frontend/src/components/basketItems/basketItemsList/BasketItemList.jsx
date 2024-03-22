import React, { useState, useEffect } from 'react';
import BasketItem from '../basketItem/BasketItem';
import MyNavLink from '../../UI/nav-bar/MyNavLink';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import MyButton from '../../UI/button/MyButton';

const BasketItemList = () => {
	const initialDataStructure = {
		order: {
			pizza: [],
			drink: [],
			salad: [],
			other: []
		},
		contacts: {
			name: '',
			phoneNumber: 0,
			email: ''
		},
		address: {
			street: '',
			building: '',
			flat: ''
		},
		dateAndTime: {
			date: '',
			time: ''
		},
		paymentMethod: '',
		status: '',
		totalPrice: 0.00
	};
	const [data, setData] = useLocalStorage('dataAbout', initialDataStructure);
  const [items, setItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0.00);

	const addProducts = (productsToAdd) => {
		setData(currentData => {
			const updatedData = { ...currentData };
	
			productsToAdd.forEach(productToAdd => {
				const category = productToAdd.type; 
				updatedData.order[category] = [
					...updatedData.order[category],
					{
						name: productToAdd.name,
						price: productToAdd.price,
						selectedSize: productToAdd.selectedSize,
						quantity: productToAdd.quantity,
					}
				];
			});
	
			return updatedData;
		});
	};
	
	const handleCheckoutClick = () => {
		setData(initialDataStructure);
		addProducts(items); 
	};
	
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

	useEffect(() => {
		let totalPrice = 0.00;
		items.forEach(item => {
			totalPrice += item.price * item.quantity;
		});
		setTotalPrice(totalPrice);
		const currentData = JSON.parse(localStorage.getItem('dataAbout')) || {};
	
			const updatedData = {
				...currentData,
				totalPrice: totalPrice,
			};
	
			localStorage.setItem('dataAbout', JSON.stringify(updatedData));
	}, [items]);

  return (
    <div>
      <div>
        {items.length === 0 ? (
          <h1>There are no items in your basket</h1>
        ) : (
          items.map((item, index) => (
            <BasketItem
              key={index}
              item={item}
              onQuantityChange={updateQuantity}
              remove={removeItem}
            />
          ))
        )}
      </div>
      <div>
        <MyNavLink onClick={handleCheckoutClick}>Оформити замовлення</MyNavLink>
      </div>
      <div>
        <p>Усього: {totalPrice}</p>
      </div>
    </div>
  );
}

export default BasketItemList;
