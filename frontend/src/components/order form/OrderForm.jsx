import React, { useState } from 'react';
import MyInput from '../authentication/AuthInput';
import MySelect from '../UI/select/MySelect';
import WeekDays from '../WeekDays';
import MyButton from '../UI/button/MyButton';
import TimePicker from '../timer picker/TimerPicker';
import { validateEmail, validateName, validatePhone } from './../../utils/validation';

const OrderForm = () => {
	const paymentMethod = [
		{
			name: "Готівка",
			value: "Cash"
		},
		{
			name: "Карта",
      value: "Card"
		}
	]

	const [isProblem, setIsProblem] = useState({
			name: true,
      phone: true,
			email: true,
			street: true,
			houseNumber: true,
	});

	const [data, setData] = useState({
		contact: {
			name: "",
      phone: "",
			email: ""
		},
		address: {
			street: "",
			houseNumber: "",
			flatNumber: ""
		},
		dateAndTime: {
			day: "Today",
			time: "10:00",
			paymentMethod: "Card"
		}
		
	});
	
	const updateData = (type, name, value) => {
		setData((prev) => ({
			...prev,
			[type]: {
				...prev[type],
				[name]: value,
        },
    }));
	};
	
	const changeDay = (day) =>{
		updateData("dateAndTime", "day", day)
	}
	const changeTime = (time) =>{
		updateData("dateAndTime", "time", time)
	}
	const changePaymentMethod = (paymentMethod) =>{
		updateData("dateAndTime", "paymentMethod", paymentMethod)
	}
	
	const allFieldsFilled = () => {
		return data.address.street && data.address.houseNumber && data.contact.email && data.contact.name && data.contact.phone;
	};

	const allFieldsValid = () => {
		return Object.values(isProblem).every(value => value === false);
	};

	
	const confirmOrder = () => {
		if (allFieldsFilled() && allFieldsValid()) {
			// кидаємо на бек
			console.log('Всі умови виконані');
		}  
	}

	const weekDays = WeekDays()
	return (
		<div>
			<div>
				<h1>Оформлення замовлення</h1>	
				<h2>усього: </h2>
			</div>
			<div>
				<h2>Контакти</h2>
				<MyInput
					name="name"
					label="Ваше ім'я"
					validationFunction={validateName}
					setIsProblem={setIsProblem}
					value={data.contact.name}
					onChange={(e)=> updateData("contact", "name", e.target.value)}
				/>
				<MyInput 
					name="phone"
					validationFunction={validatePhone}
					setIsProblem={setIsProblem}
					label="Номер телефону"
					value={data.contact.phone}
					onChange={(e)=> updateData("contact", "phone", e.target.value)}
				/>
				<MyInput 
					name="email"
					label="Емейл"
					setIsProblem={setIsProblem}
					value={data.contact.email}
					validationFunction={validateEmail}
					onChange={(e)=> updateData("contact", "email", e.target.value)}
				/>
			</div>
			<div>
				<h2>Адреса</h2>
				<MyInput 
          name="street"
					validationFunction={validateName}
					setIsProblem={setIsProblem}
					label="Вулиця"
					value={data.address.street}
					onChange={(e)=> updateData("address", "street", e.target.value)}
				/>
				<MyInput 
					name="houseNumber"
					validationFunction={validateName}
					setIsProblem={setIsProblem}
					label="Будинок"
					value={data.address.houseNumber}
					onChange={(e)=> updateData("address", "houseNumber", e.target.value)}
				/>
				<MyInput 
					label="Квартира"
					value={data.address.flatNumber}
					onChange={(e)=> updateData("address", "flatNumber", e.target.value)}
				/>
			</div>
			<div>
				<div>
					<h2>Дата та час</h2>
					<h2>Оплата</h2>
				</div>
				<MySelect
					value={data.dateAndTime.date}
					onChange={changeDay}
					option={weekDays}
				/>
				<TimePicker 
				  value={data.dateAndTime.time}
					onChange={changeTime}
				/>
				<MySelect 
					value={data.dateAndTime.paymentMethod}
					onChange={changePaymentMethod}
					option={paymentMethod}
				/>
			</div>
			<MyButton onClick={confirmOrder}>Оформити замовлення</MyButton>
		</div>
	);
}

export default OrderForm;
