import React from 'react';
import MyInput from '../UI/input/MyInput';

const OrderForm = () => {
	return (
		<div>
			<div>
				<h1>Оформлення замовлення</h1>	
				<h2>усього: </h2>
			</div>
			<div>
				<h2>Контакти</h2>
				<MyInput 
					placeholder="Ваше ім'я"
				/>
				<MyInput 
					placeholder="Номер телефону"
				
				/>
				<MyInput 
					placeholder="Емейл"
				
				/>
			</div>
			<div>
				<h2>Адреса</h2>
				<MyInput 
					placeholder="Вулиця"

				/>
				<MyInput 
				
				/>
				<MyInput 
				
				/>
			</div>
			<div>
				<div>
					<h2>Дата та час</h2>
					<h2>Дата та час</h2>
				</div>
				<MyInput />
				<MyInput />
				<MyInput />
			</div>
		</div>
	);
}

export default OrderForm;
