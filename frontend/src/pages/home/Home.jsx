import React from 'react';
import cl from './../../style/style.module.css'
import CreateCustomPizza from '../../components/create custom pizza/CreateCustomPizza';
import FeedbackForm from "../../components/feedback form/FeedbackForm";

const Home = () => {
	return (
		<div className={cl.home}>
			<div className={cl.container}>
				HomePage
				<CreateCustomPizza />


			</div>
			<FeedbackForm />
		</div>
	);
}

export default Home;
