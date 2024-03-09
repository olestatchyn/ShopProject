import React from 'react';
import MyNavLink from '../nav-bar/MyNavLink';
import cl from "./Footer.module.css"
import main from "./../../../style/style.module.css"

const Footer = () => {
	return (
		<div className={cl.footer_item}>
			<div className={main.container}>
				<div>
					<MyNavLink to="basket">test</MyNavLink>
					<p></p>
					<p></p>
				</div>
				<div>
				</div>
				<div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
