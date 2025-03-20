import { Link } from 'react-router-dom';
import '@/sass/common/components/header.sass';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Header = () => {
	const fullText = 'CHO HYEON BIN PORTFOLIO';
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => {
				if (prev < fullText.length) {
					return prev + 1;
				} else {
					clearInterval(interval);
					return prev;
				}
			});
		}, 150);
		gsap.fromTo('.header-text', { opacity: 0 }, { opacity: 1, duration: 1 });
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="header-wrap">
			<div className="header-box">
				<div className="header-text">
					{fullText.slice(0, index)}
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
};

export default Header;