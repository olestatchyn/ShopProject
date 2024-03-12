import React from 'react';
import MyNavLink from '../nav-bar/MyNavLink';
import cl from "./Footer.module.css"
// import main from "./../../../style/style.module.css"
import logo from "../../../source/Logo.svg";
import instagram from "../../../source/Instagram.svg";
import facebook from "../../../source/Facebook.svg";

const Footer = () => {
	return (
		<div className={cl.footer}>
			<div className={cl.footer__container}>
				<div className={cl.footer__row}>

					<div className={cl.footer__col}>
						<div className={cl.footer__logo}>
							<MyNavLink className="myNavLink" to="/">
								<img src={logo} alt="Logo"/>
							</MyNavLink>
						</div>
						<div className={cl.footer__logo__description}>
							© 2020 Всі права захищені
						</div>
					</div>

					<div className={cl.footer__col}>
						<div className={cl.footer__contacts}>
							<div className={cl.footer__address}>
								Вул. Європейська площа 3
							</div>
							<div className={cl.footer__email}>
								primepizza@gmail.com
							</div>
							<div className={cl.footer__number}>
								+ 38 (067) 009 02 09
							</div>
						</div>
					</div>

					<div className={cl.footer__col}>
						<div className={cl.footer__social}>
							<div className={cl.footer__instagram}>
								<a href="#"><img src={instagram} alt="instagram"/></a>
							</div>
							<div className={cl.footer__facebook}>
								<a href="#"><img src={facebook} alt="faceboook"/></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
