import React, { useEffect } from 'react';
import PizzaLoader from '../UI/loader/PizzaLoader';
import { useFetching } from '../../hooks/useFetching';
import axios from 'axios';
import img from '../../source/complete.png';
import { useNavigate } from 'react-router-dom';

const OrderLoader = () => {
	const navigate = useNavigate()
	const [sendRequest, isSending, sendError] = useFetching(async () => {
		try {
			const response = await axios.post("URL", localStorage.getItem('dataAbout'), {
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
		console.log(isSending, sendError);
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
