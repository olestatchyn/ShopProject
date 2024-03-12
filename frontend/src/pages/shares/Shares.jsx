import React from 'react';
import FeedbackForm from '../../components/feedback form/FeedbackForm';
import cl from './Shares.module.scss';
import main from './../../style/style.module.css';
import content1 from "../../source/shares/content1.png";
import content2 from "../../source/shares/content2.png";
import content3 from "../../source/shares/content3.png";
import content4 from "../../source/shares/content4.png";

const Shares = () => {
	return (
		<div className={cl.shares}>
			<div className={main.container}>
				<div className={cl.shares__content}>
					<div className={cl.shares__content__row}>
						<div className={cl.shares__content__img}>
							<img src={content1} alt="content1"/>
						</div>
						<div className={cl.shares__content__item}>
							<div className={cl.shares__content__title}>
								1+1=3
							</div>
							<div className={cl.shares__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
							</div>
						</div>
					</div>
					<div className={cl.shares__content__row}>
						<div className={cl.shares__content__img}>
							<img src={content2} alt="content2"/>
						</div>
						<div className={cl.shares__content__item}>
							<div className={cl.shares__content__title}>
								1+1=2+1л Сoca Cola
							</div>
							<div className={cl.shares__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
							</div>
						</div>
					</div>
					<div className={cl.shares__content__row}>
						<div className={cl.shares__content__img}>
							<img src={content3} alt="content3"/>
						</div>
						<div className={cl.shares__content__item}>
							<div className={cl.shares__content__title}>
								15% на самовиніс
							</div>
							<div className={cl.shares__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
							</div>
						</div>
					</div>
					<div className={cl.shares__content__row}>
						<div className={cl.shares__content__img}>
							<img src={content4} alt="content4"/>
						</div>
						<div className={cl.shares__content__item}>
							<div className={cl.shares__content__title}>
								20% на каву
							</div>
							<div className={cl.shares__content__text}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin.</p>
							</div>
						</div>
					</div>
				</div>




			</div>


			<FeedbackForm />
		</div>
	);
}

export default Shares;
