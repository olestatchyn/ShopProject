import React from 'react';
import cl from './PaymentAndDelivery.module.scss';
import main from './../../style/style.module.css';
import d1 from './../../source/delivery/d1.png';
import d2 from './../../source/delivery/d2.png';
import d3 from './../../source/delivery/d3.png';
import p1 from './../../source/delivery/p1.png';
import p2 from './../../source/delivery/p2.png';
import p3 from './../../source/delivery/p3.png';

const PaymentAndDelivery = () => {
	return (
		<div className={cl.delivery}>

			<div className={main.container}>
				<div className={cl.delivery__content}>
					<div className={cl.delivery__item}>
						<div className={cl.delivery__title}>
							Правила доставки
						</div>
						<div className={cl.delivery__row}>
							<div className={cl.delivery__column}>
								<div className={cl.delivery__img}>
									<img src={d1} alt=""/>
								</div>
								<div className={cl.delivery__subtitle}>
									Доставка по місту безкоштовна
								</div>
								<div className={cl.delivery__text}>
									Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.
								</div>
							</div>
							<div className={cl.delivery__column}>
								<div className={cl.delivery__img}>
									<img src={d2} alt=""/>
								</div>
								<div className={cl.delivery__subtitle}>
									У “зелену зону” - до 30 хвилин
								</div>
								<div className={cl.delivery__text}>
									Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.
								</div>
							</div>
							<div className={cl.delivery__column}>
								<div className={cl.delivery__img}>
									<img src={d3} alt=""/>
								</div>
								<div className={cl.delivery__subtitle}>
									У “червону зону” - до 60хв
								</div>
								<div className={cl.delivery__text}>
									Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.
								</div>
							</div>
						</div>
					</div>
					<div className={cl.delivery__item}>
						<div className={cl.delivery__title}>
                            Правила оплати
						</div>
						<div className={cl.delivery__row}>
							<div className={cl.delivery__column}>
								<div className={cl.delivery__img}>
									<img src={p1} alt=""/>
								</div>
								<div className={cl.delivery__subtitle}>
									Готівка
								</div>
								<div className={cl.delivery__text}>
									Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.
								</div>
							</div>
							<div className={cl.delivery__column}>
								<div className={cl.delivery__img}>
									<img src={p2} alt=""/>
								</div>
								<div className={cl.delivery__subtitle}>
									Картка
								</div>
								<div className={cl.delivery__text}>
									Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.
								</div>
							</div>
							<div className={cl.delivery__column}>
								<div className={cl.delivery__img}>
									<img src={p3} alt=""/>
								</div>
								<div className={cl.delivery__subtitle}>
									LiqPay
								</div>
								<div className={cl.delivery__text}>
									Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentAndDelivery;
