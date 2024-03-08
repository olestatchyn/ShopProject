import React from 'react';
import cl from './Header.module.css'
import main from './../../style/style.module.css'
import MyNavLink from '../UI/nav-bar/MyNavLink';

const Header = () => {
	return (
		<div className={cl.header}>
			<div className={main.container}>
				<div className={cl.header__row}>
					<div className={cl.header__col}>
						<div className={cl.header__pages}>
							<div className={cl.header__pages__item}>
								<MyNavLink to="shares">Акції</MyNavLink>
							</div>
							<div className={cl.header__pages__item}>
								<MyNavLink to="payment_and_delivery">Доставка і оплата</MyNavLink>
							</div>
							<div className={cl.header__pages__item}>
								<MyNavLink to="about"> Про нас</MyNavLink>
							</div>
						</div>
					</div>
					<div className={cl.header__col}>

					</div>
					<div className={cl.header__col}>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
