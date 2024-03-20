import React from 'react';
import MyButton from '../button/MyButton';

const CountControl = () => {
	return (
		<div>
			<MyButton>+</MyButton>
			<p>0</p>
			<MyButton>-</MyButton>
		</div>
	);
}

export default CountControl;
