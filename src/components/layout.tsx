import React from 'react';
import { Outlet } from 'react-router-dom';
import '@/sass/common/components/layout.sass';

const Layout: React.FC = () => {
	return (
		<div className="layout">
			<main className="main-content">
				<Outlet />
			</main>
			{/* <Footer/> */}
		</div>
	);
};

export default Layout;