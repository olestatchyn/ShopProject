import React from 'react';
import MyButton from '../../UI/button/MyButton';
import CountControl from '../../UI/count-control/CountControl';

const BasketItem = () => {
	return (
		<div>
			<MyButton>-</MyButton>
			<img src="" alt="" />
			<span>Product name</span>
			<p>Description</p>
			<p>Size</p>
			<CountControl />
		</div>
	);
}

export default BasketItem;
