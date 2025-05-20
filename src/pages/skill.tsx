import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/sass/view/skill.sass'
const SkillComponent = () => {
	const sliderSettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: false,
	};

	const skillItems = Array.from({ length: 13 }, (_, i) => (
		<div key={i}>
			<div className="skill-box">
				<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
				<div>
					<p>html{ i }</p>
					<p>Responsive websites with fast loading</p>
				</div>
			</div>
		</div>
	));
	return (
		<section className="skill-wrap">
			<div className="title">
				<span>skill & tool</span>
			</div>
			<div className="skill-container">
				<Slider {...sliderSettings}>
					{skillItems}
				</Slider>
			</div>
		</section>
	);
};

export default SkillComponent;