import React, { useState } from 'react';
// import cl from "./FeedbackForm.module.css"
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import classes from "../UI/input/MyInput.module.css";
import cl from './FeedbackForm.module.css';
const FeedbackForm = () => {
	const [data, setData] = useState({
		name: "",
		phone: ""
	});

	function onClick(e){
		console.log(data);
	}

	return (
		<div className={cl.feedback}>
			.<div className={cl.feedback__container}>
				<div className={cl.feedback__title}>
					Заповніть форму і ми одразу<br/> зв’яжемось з вами!
				</div>
				<div className={cl.feedback_form}>
						<MyInput
							value={data.name}
							onChange={(e)=> setData({...data, name: e.target.value})}
							placeholder="Ваше ім'я"
							className={cl.myInput}
						></MyInput>
						<MyInput
							value={data.phone}
							onChange={(e)=> setData({...data, phone: e.target.value})}
							placeholder="Номер телефону"
							className={cl.myInput}
						></MyInput>

					<MyButton className={cl.button} onClick={onClick}>
						<div className={cl.feedback_button}>Чекаю дзвінка!</div>
					</MyButton>
				</div>
			</div>
		</div>
	);
}

export default FeedbackForm;
