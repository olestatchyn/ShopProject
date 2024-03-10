import React, { useState } from 'react';
import cl from './Header.module.css';
import logo from './../../../source/Logo.svg';
import MyNavLink from './../nav-bar/MyNavLink';
import MyButton from '../button/MyButton';
import MyModal from '../myModal/MyModal';
import FeedbackForm from '../../feedback form/FeedbackForm';
import RegistrationForm from '../../registrartion form/RegistrationForm';

const Header = () => {
	const [modal, setModal] = useState(false);

	return (
		<div className={cl.header}>
			<div className={cl.header__container}>
				<div className={cl.header__row}>
					<div className={cl.header__col}>
						<div className={cl.header__logo}>
							<MyNavLink className="myNavLink" to="/">
								<img src={logo} alt="Logo"/>
							</MyNavLink>
						</div>
					</div>
					<div className={cl.header__col}>
						<div className={cl.header__pages}>
							<MyNavLink className={cl.myNavLink} to="shares">
								<div className={`${cl.header__pages__item} ${cl.active__page}`}>
									Акції
								</div>
							</MyNavLink>
							<MyNavLink className={cl.myNavLink} to="payment_and_delivery">
								<div className={cl.header__pages__item}>
									Доставка і оплата
								</div>
							</MyNavLink>
							<MyNavLink className={cl.myNavLink} to="about">
								<div className={cl.header__pages__item}>
									Про нас
								</div>
							</MyNavLink>
						</div>
					</div>
					<div className={cl.header__col}>
						<div className={cl.header__buttons}>
							<div className={cl.header__LogIn}>
							<MyButton className={cl.button} onClick={()=>setModal(true)}>Log In</MyButton>
							<MyModal visible={modal} setVisible={setModal}> 
								<RegistrationForm />
							</MyModal>
							</div>
							<div className={cl.header__SignUp}>
								<MyButton className={cl.button}>Sign Up</MyButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}



export default Header;
