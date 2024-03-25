import React, { useEffect } from 'react';
import PizzaLoader from '../UI/loader/PizzaLoader';
import { useFetching } from '../../hooks/useFetching';
import axios from 'axios';
import img from '../../source/complete.png';
import { useNavigate } from 'react-router-dom';

const OrderLoader = () => {
	const navigate = useNavigate()
	const orderObject = {
		order: {
			pizza: [
				{ name: 'Margherita', size: 'Medium', quantity: 2 },
				{ name: 'Pepperoni', size: 'Large', quantity: 1 }
			],
			drink: [
				{ name: 'Coke', size: 'Medium', quantity: 3 }
			],
			salad: [],
			other: []
		},
		contacts: {
			name: 'John Doe',
			phoneNumber: 1234567890,
			email: 'john@example.com'
		},
		address: {
			street: '123 Main Street',
			building: 4,
			flat: 10
		},
		dateAndTime: {
			date: '2024-03-21',
			time: '18:00'
		},
		paymentMethod: 'Credit Card',
		status: 'Pending',
		totalPrice: 35.50
	};
	
	const [sendRequest, isSending, sendError] = useFetching(async () => {
		try {
			console.log(JSON.parse(localStorage.getItem('dataAbout')));
			const response = await axios.post("http://localhost:5000/api/checkout/order", localStorage.getItem('dataAbout'), {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response.data);
		} catch (error) {
			throw new Error(error.response?.data?.message || 'Помилка запиту');
		}
	});
	
	useEffect(() => {
		sendRequest();
		}, []);

	useEffect(() => {
		if (!isSending && sendError) {
			const timer = setTimeout(() => {
				navigate("/");
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [isSending, sendError, navigate]);
	
	return (
    <div>
      {isSending ? (
        <div
          style={{ marginTop: 50, display: "flex", justifyContent: "center" }}
        >
          <PizzaLoader />
        </div>
      ) : (
        <div>
          <img src={img} alt="" />
					<p>Дякуємо за замовлення</p>
					<p>Наш оператор незабаром з’вяжеться з вами для підтвердження замовлення</p>

        </div>
      )}
    </div>
  );
}

export default OrderLoader;
