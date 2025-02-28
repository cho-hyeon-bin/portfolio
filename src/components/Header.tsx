import { Link } from 'react-router-dom';
import '@/sass/common/components/header.sass';
function Header() {
	return (
		<div className="header-wrap">
			<div className="header-box">
				<div>
					CHO HYEON BIN PORTFOLIO
				</div>
				<div>
					<Link to="/">ABOUT ME</Link>
					<Link to="/">PROJECT</Link>
					<Link to="/">SKILLS</Link>
					<Link to="/">CONTACT</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;