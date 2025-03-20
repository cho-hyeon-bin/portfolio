import { useEffect } from 'react';
import gsap from 'gsap';
import '@/sass/view/home.sass'
const HomeComponent = () => {
	useEffect(() => {
		gsap.to('.portfolio', {
			scale: 0.8,
			duration: 1,
			ease: 'power1.inOut',
			yoyo: true,
			repeat: -1
		});
	}, []);
	return (
		<section className="main-wrap">	
			<div className="main">
				<img src="/src/assets/image/portfolio_main.png" alt="portfolio_main" className="portfolio"/>
				<img src="/src/assets/image/object3.png" alt="object3" className="frontend"/>
				<img src="/src/assets/image/object1.png" alt="object1" className="purple"/>
				<img src="/src/assets/image/object2.png" alt="object2" className="star"/>
				<img src="/src/assets/image/object4.png" alt="object4" className="smile" />
				<img src="/src/assets/image/object8.png" alt="object8" className="green"/>
				<img src="/src/assets/image/object6.png" alt="object6" className="flower-y"/>
				<img src="/src/assets/image/object5.png" alt="object5" className="rainbow1"/>
				<img src="/src/assets/image/object7.png" alt="object7" className="flower-g" />
				<img src="/src/assets/image/object9.png" alt="object9" className="rainbow2"/>
			</div>
		</section>
	);
};

export default HomeComponent;