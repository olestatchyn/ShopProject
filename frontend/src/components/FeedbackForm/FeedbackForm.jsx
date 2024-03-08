import React, { useState } from 'react';
// import cl from "./FeedbackForm.module.css"
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const FeedbackForm = () => {
	const [data, setData] = useState({
		name: "",
		phone: ""
	});

	function onClick(e){
		console.log(data);
	}

	return (
		<div >
			<div >
				<div>
					<h1>Заповніть форму і ми одразу зв’яжемось з вами!</h1>
				</div>
				<div>
					<MyInput 
						value={data.name} 
						onChange={(e)=> setData({...data, name: e.target.value})} 
						placeholder="Ваше ім'я"
					></MyInput>
					<MyInput 
						value={data.phone} 
						onChange={(e)=> setData({...data, phone: e.target.value})} 
						placeholder="Номер телефону"
					></MyInput>
					<MyButton onClick={onClick}>Чекаю дзвінка!</MyButton>
				</div>
			</div>
		</div>
	);
}

export default FeedbackForm;
