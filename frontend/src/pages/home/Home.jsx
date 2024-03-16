import React from 'react';
import cl from './../../style/style.module.css'
import CreateCustomPizza from '../../components/create custom pizza/CreateCustomPizza';
import FeedbackForm from "../../components/feedback form/FeedbackForm";
import Menu from '../../components/menu/Menu';

const Home = () => {
  

	return (
		<div className={cl.home}>
			<div className={cl.container}>
				HomePage
				
				<Menu />
				<CreateCustomPizza />


			</div>
			<FeedbackForm />
		</div>
	);
}

export default Home;
