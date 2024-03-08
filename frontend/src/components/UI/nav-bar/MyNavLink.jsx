import React from 'react';
import { NavLink } from 'react-router-dom';

const MyNavLink = ({ children, ...props }) => {
	return (
			<NavLink {...props}>{children}</NavLink>
	);
}

export default MyNavLink;
