import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/UI/header/Header';
import Footer from '../../components/UI/footer/Footer';

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet ></Outlet>
			<Footer />
		</div>
	);
}

export default Layout;
