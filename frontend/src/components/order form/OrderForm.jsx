import React, { useEffect, useState } from 'react';
import MyInput from '../authentication/AuthInput';
import MySelect from '../UI/select/MySelect';
import WeekDays from '../WeekDays';
import MyButton from '../UI/button/MyButton';
import TimePicker from '../timer picker/TimerPicker';
import { validateEmail, validateName, validatePhone } from './../../utils/validation';

const OrderForm = () => {
  const [data, setData] = useState([]);

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

	const [orderData, setOrderData] = useState({
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
			day: new Date().toISOString().split('T')[0],
			time: "10:00",
			paymentMethod: "Card",
			status: 'Pending'
		}
		
	});

	useEffect(() => {
    const storedItems = localStorage.getItem('dataAbout');
		console.log(JSON.parse(storedItems));
    if (storedItems) {
      setData(JSON.parse(storedItems));
    }
  }, []); 

	const removeItem = (itemId, selectedSize) => {
		setData(prevItems => {
			const newItems = prevItems.filter(item => !(item.id === itemId && item.selectedSize === selectedSize));
			localStorage.setItem('basketItems', JSON.stringify(newItems));
			return newItems;
		});
	};
	
	const updateData = (type, name, value) => {
		setOrderData((prev) => ({
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
		return orderData.address.street && orderData.address.houseNumber && orderData.contact.email && orderData.contact.name && orderData.contact.phone;
	};

	const allFieldsValid = () => {
		return Object.values(isProblem).every(value => value === false);
	};

	
	const confirmOrder = () => {
		if (allFieldsFilled() && allFieldsValid()) {
			const currentData = JSON.parse(localStorage.getItem('dataAbout')) || {};
	
			const updatedData = {
				...currentData,
				contacts: {
					name: orderData.contact.name,
					phoneNumber: orderData.contact.phone,
					email: orderData.contact.email
				},
				address: {
					street: orderData.address.street,
					building: orderData.address.houseNumber,
					flat: orderData.address.flatNumber
				},
				dateAndTime: {
					date: orderData.dateAndTime.day,
					time: orderData.dateAndTime.time
				},
				paymentMethod: orderData.dateAndTime.paymentMethod,
				status: orderData.dateAndTime.status,
			};
	
			localStorage.setItem('dataAbout', JSON.stringify(updatedData));

			console.log(updateData);
		}
	};
	

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
					value={orderData.contact.name}
					onChange={(e)=> updateData("contact", "name", e.target.value)}
				/>
				<MyInput 
					name="phone"
					validationFunction={validatePhone}
					setIsProblem={setIsProblem}
					label="Номер телефону"
					value={orderData.contact.phone}
					onChange={(e)=> updateData("contact", "phone", e.target.value)}
				/>
				<MyInput 
					name="email"
					label="Емейл"
					setIsProblem={setIsProblem}
					value={orderData.contact.email}
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
					value={orderData.address.street}
					onChange={(e)=> updateData("address", "street", e.target.value)}
				/>
				<MyInput 
					name="houseNumber"
					validationFunction={validateName}
					setIsProblem={setIsProblem}
					label="Будинок"
					value={orderData.address.houseNumber}
					onChange={(e)=> updateData("address", "houseNumber", e.target.value)}
				/>
				<MyInput 
					label="Квартира"
					value={orderData.address.flatNumber}
					onChange={(e)=> updateData("address", "flatNumber", e.target.value)}
				/>
			</div>
			<div>
				<div>
					<h2>Дата та час</h2>
					<h2>Оплата</h2>
				</div>
				<MySelect
					value={orderData.dateAndTime.date}
					onChange={changeDay}
					option={weekDays}
				/>
				<TimePicker 
				  value={orderData.dateAndTime.time}
					onChange={changeTime}
				/>
				<MySelect 
					value={orderData.dateAndTime.paymentMethod}
					onChange={changePaymentMethod}
					option={paymentMethod}
				/>
			</div>
			<MyButton onClick={confirmOrder}>Оформити замовлення</MyButton>
			{/* <MyButton onClick={()=>console.log(JSON.parse(localStorage.getItem('dataAbout')))}>Оформити замовлення</MyButton> */}
		</div>
	);
}

export default OrderForm;
