import { useRoutes } from 'react-router';'react-router-dom';
import routes from '@/router/index';
import { BrowserRouter as Router } from 'react-router-dom';
import '@/sass/common/index.sass';
const AppRoutes = () => {
	const element = useRoutes(routes);
	return element;
};

function App() {
	return (
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;