import React, { useState } from 'react';
import cl from "./FeedbackForm.module.css"
import MyInput from '../UI/input/MyInput';

const FeedbackForm = () => {
	const [data, setData] = useState({
		name: "",
		phone: ""
	});

	function onChange(e){
		setData(...data, [e.target.value] = e.target.value)
	}

	return (
		<div >
			<div >
				<div>
					<h1> </h1>
				</div>
				<div>
					<MyInput 
						value={data.name} 
						onChange={(e)=> setData({...data, name: e.target.value})} 
						placeholder="Ваше ім'я"
					></MyInput>
					<MyInput 
						value={data.phone} 
						onChange={(e)=> setData({...data, name: e.target.value})} 
						placeholder="Номер телефону"
					></MyInput>
					
				</div>
			</div>
		</div>
	);
}

export default FeedbackForm;
