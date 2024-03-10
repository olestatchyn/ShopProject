import React from 'react';
import cl from './About.module.css';
import main from './../../style/style.module.css';
import facebook from './../../source/about us/facebook.svg';
import instagram from './../../source/about us/instagram.svg';
import gmail from './../../source/about us/email.svg';
const About = () => {
	return (
		<div className={cl.about}>

			
			<div className={cl.about__pizza}>
				<div className={cl.about__contacts}>
					<div className={cl.about__column}>
						<div className={cl.about__contacts__img}>
							<img src={facebook} alt=""/>
						</div>
						<div className={cl.about__contacts__title}>
							Facebook
						</div>
						<div className={cl.about__contacts__text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
						</div>
					</div>
					<div className={cl.about__column}>
						<div className={cl.about__contacts__img}>
							<img src={instagram} alt=""/>
						</div>
						<div className={cl.about__contacts__title}>
							Instagram
						</div>
						<div className={cl.about__contacts__text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
						</div>
					</div>
					<div className={cl.about__column}>
						<div className={cl.about__contacts__img}>
							<img src={gmail} alt=""/>
						</div>
						<div className={cl.about__contacts__title}>
							Gmail
						</div>
						<div className={cl.about__contacts__text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
						</div>
					</div>
				</div>
			</div>
			<div className={cl.about__space}>

			</div>


			<div className={main.container}>




			</div>
		</div>
	);
}

export default About;
