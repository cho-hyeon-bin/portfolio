import React from 'react';
import { Outlet } from 'react-router-dom';
import '@/sass/common/components/layout.sass';
import Footer from "@/components/Footer"
const Layout: React.FC = () => {
	return (
		<div className="layout">
			<main className="main-content">
				<Outlet />
			</main>
			<Footer/>
		</div>
	);
};

export default Layout;