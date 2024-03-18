import React from 'react';
import cl from './TextLogo.module.scss'

const TextLogo = () => {
	return (
		<div className={cl.home__instagram}>
			<div className={cl.home__instagram__ext}>
				<div className={cl.home__instagram__int}>
					<div className={cl.home__instagram__text}>@primepizza.if</div>
				</div>
			</div>
		</div>
	);
}

export default TextLogo;
