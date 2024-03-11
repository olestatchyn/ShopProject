import React from 'react';
import cl from './About.module.css';
import main from './../../style/style.module.css';
import facebook from './../../source/about us/facebook.svg';
import instagram from './../../source/about us/instagram.svg';
import gmail from './../../source/about us/email.svg';
import content1 from './../../source/about us/content1.png';
import content2 from './../../source/about us/content2.png';
import content3 from './../../source/about us/content3.png';
import content4 from './../../source/about us/content4.png';
const About = () => {
	return (
		<div className={cl.about}>

			<div className={cl.about__background}>
				<div className={cl.about__contacts}>
					<div className={cl.about__contacts__column}>
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
					<div className={cl.about__contacts__column}>
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
					<div className={cl.about__contacts__column}>
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
			<div className={cl.about__space}></div>

			<div className={main.container}>
				<div className={cl.about__content}>
					<div className={cl.about__content__row}>
						<div className={cl.about__content__img}>
							<img src={content1} alt="content1"/>
						</div>
						<div className={cl.about__content__item}>
							<div className={cl.about__content__title}>
								Молода та амбіційна піцерія
							</div>
							<div className={cl.about__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.</p>
							</div>
						</div>
					</div>
					<div className={cl.about__content__row}>
						<div className={cl.about__content__img}>
							<img src={content2} alt="content2"/>
						</div>
						<div className={cl.about__content__item}>
							<div className={cl.about__content__title}>
								Піца від якої хочеться жити
							</div>
							<div className={cl.about__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.</p>
							</div>
						</div>
					</div>
					<div className={cl.about__content__row}>
						<div className={cl.about__content__img}>
							<img src={content3} alt="content3"/>
						</div>
						<div className={cl.about__content__item}>
							<div className={cl.about__content__title}>
								Швидко та смачно
							</div>
							<div className={cl.about__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.</p>
							</div>
						</div>
					</div>
					<div className={cl.about__content__row}>
						<div className={cl.about__content__img}>
							<img src={content4} alt="content4"/>
						</div>
						<div className={cl.about__content__item}>
							<div className={cl.about__content__title}>
								Особливий рецепт
							</div>
							<div className={cl.about__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
