import React from 'react';
import cl from './../../style/style.module.css'
import CreateCustomPizza from '../../components/create custom pizza/CreateCustomPizza';

const Home = () => {
	return (
		<div className={cl.container}>
			HomePage
			<CreateCustomPizza />
		</div>
	);
}

export default Home;
