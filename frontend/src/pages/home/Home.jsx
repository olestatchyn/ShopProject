import React from 'react';
import main from './../../style/style.module.css'
import cl from './Home.module.scss'
import CreateCustomPizza from '../../components/create custom pizza/CreateCustomPizza';
import FeedbackForm from "../../components/feedback form/FeedbackForm";

import Menu from '../../components/menu/Menu';

import CarouselComponent from "../../components/carousel/Carousel";


const Home = () => {
  

	return (
		<div className={cl.home}>

			<div className={main.container}>

				
				<Menu />
				<CreateCustomPizza />

			</div>
			<div className={cl.home__carousel}>
				<CarouselComponent />
				<div className={cl.home__instagram}>
					<div className={cl.home__instagram__ext}>
						<div className={cl.home__instagram__int}>
							<div className={cl.home__instagram__text}>@primepizza.if</div>
						</div>
					</div>
				</div>
			</div>
			<FeedbackForm />
		</div>
	);
}

export default Home;
