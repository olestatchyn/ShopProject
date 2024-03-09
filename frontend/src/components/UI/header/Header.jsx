import React from 'react';
import cl from './Header.module.css'
import main from "./../../../style/style.module.css"
import MyNavLink from '../nav-bar/MyNavLink';
import { useAuth } from '../../../utils/AuthContext';
import MyButton from '../button/MyButton';

const Header = () => {

	const { isAuthenticated, userRole } = useAuth();

	return (
		<div className={cl.header}>
			<div className={main.container}>
				<div className={cl.header__row}>
					<div className={cl.header__col}>
						<div>Тут фотка</div>
					</div>
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
						<div>тут інфа про годину</div>
						<div>тут інфа про номер</div>
					</div>
					<div className={cl.header__col}>
						<div><MyButton>Log In</MyButton></div>
						<div><MyButton>Sing Up</MyButton></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
