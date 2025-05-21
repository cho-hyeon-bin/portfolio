import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/sass/view/skill.sass'
const SkillComponent = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		swipeToSlide: true,
		variableWidth: true,
	};
	return (
		<section className="skill-wrap">
			<div className="title">
				<span>skill & tool</span>
			</div>
			<div className="skill-container">
				<Slider {...settings}>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
					<div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html1</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
						<div className="skill-box">
							<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
							<div>
								<p>html2</p>
								<p>Responsive websites with fast loading</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default SkillComponent;