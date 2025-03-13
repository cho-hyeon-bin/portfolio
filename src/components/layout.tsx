import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header.tsx';
// import Footer from '@/components/Footer.tsx';
import '@/sass/common/components/layout.sass';

const Layout: React.FC = () => {
	return (
		<div className="layout">
			<Header />
			<main className="main-content">
				<Outlet />
			</main>
			{/* <Footer/> */}
		</div>
	);
};

export default Layout;