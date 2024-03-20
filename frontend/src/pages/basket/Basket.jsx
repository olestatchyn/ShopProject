import React from 'react';
import OrderForm from '../../components/order form/OrderForm';
import ProductsList from '../../components/products list/ProductsList';
import BasketItemList from '../../components/basketItems/basketItemsList/BasketItemList';

const Basket = () => {
	return (
		<div>
			<BasketItemList />
			{/* <OrderForm /> */}
		</div>
	);
}

export default Basket;
