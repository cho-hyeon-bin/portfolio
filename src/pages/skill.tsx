// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/sass/view/skill.sass'
const SkillComponent = () => {
	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 1000,
	// 	slidesToShow: 2,
	// 	swipeToSlide: true,
	// 	variableWidth: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	cssEase: 'linear'
	// };
	return (
		<section className="skill-container">
			<div className="skill-wrap">
				<div className="title">
					<span>skill & tool</span>
				</div>
				<div className="skill-list">
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="html-icon" />
						<div>
							<p>html5</p>
							<p>Responsive websites with fast loading</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="vue-icon" />
						<div>
							<p>Vue.js</p>
							<p>컴포넌트 기반 설계, Vuex/Pinia 상태 관리</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="js-ts-icon" />
						<div>
							<p>JavaScript & TypeScript</p>
							<p>ES6+, async/await, 정적 타입 체크</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="react-icon" />
						<div>
							<p>React.js</p>
							<p>함수형 컴포넌트, 훅 기반 상태 관리, 리팩토링</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="jquery-icon" />
						<div>
							<p>jQuery</p>
							<p>Legacy 코드 유지보수 및 최적화</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="html-css-icon" />
						<div>
							<p>CSS3</p>
							<p>웹 표준, 반응형 레이아웃, 미디어 쿼리</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="sass-tailwind-icon" />
						<div>
							<p>Sass / Tailwind CSS</p>
							<p>유지보수성 높은 스타일링, 일관성 있는 UI</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="git-icon" />
						<div>
							<p>Git</p>
							<p>버전 관리, 브랜치 전략, 충돌 해결</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="jira-icon" />
						<div>
							<p>Jira</p>
							<p>애자일 스프린트 관리, 이슈 트래킹</p>
						</div>
					</div>
					<div className="skill-box">
						<img src="/src/assets/image/html-icon.svg" alt="confluence-icon" />
						<div>
							<p>Confluence</p>
							<p>프로젝트 문서화, 지식 공유</p>
						</div>
					</div>
					{/* <Slider {...settings}>
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
					</Slider> */}
				</div>
			</div>
		</section>
	);
};

export default SkillComponent;