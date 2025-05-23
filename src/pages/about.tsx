import { useEffect } from 'react';
import '@/sass/view/about.sass'
const AboutComponent = () => {
	useEffect(() => {
		
	}, []);
	return (
		<section className="about-container">
			<div className="about-wrap">
				<div className="title">
					<span>about me</span>
				</div>
				<div className="profile-box">
					<div className="img-box">
						<img src="/src/assets/image/profile.png" alt="profile" />
					</div>
					<div>
						<h1>프론트엔드 엔지니어 조현빈입니다</h1>
						<p>사용자 경험을 중심에 두고 생각하는 프론트엔드 개발자입니다. Vue.js, JavaScript, TypeScript 등 다양한 기술을 활용해 직관적이고 효율적인 웹 애플리케이션을 개발해왔습니다. 사용자의 관점에서 복잡한 비즈니스 로직을 단순하고 명확하게 구현하는 데 집중하며, 휴먼 에러를 최소화할 수 있는 UI/UX 설계를 중요하게 생각합니다. 프로젝트마다 더 나은 사용자 인터페이스를 고민하고, 협업과 커뮤니케이션을 통해 완성도 높은 결과물을 만들어내는 것을 중요하게 여깁니다. 새로운 기술을 배우고 적용하는 데 주저하지 않으며, 사용자에게 가치 있는 경험을 제공하기 위해 끊임없이 발전하고 있습니다.</p>
						<p>e-mail : insideb94@gamil.com</p>
					</div>
				</div>
			</div>
			<div className="career-wrap">
				<div className="title">
					<span>career</span>
				</div>
				<div className="discription-box">
					<p><a href="https://www.onoffmix.com/">온오프믹스</a> (2022. 07 ~ 2025. 05)</p>
					<p>국내 최대 종합 이벤트 플랫폼인 온오프믹스에서 프론트엔드 개발자로 근무하며, Vue.js를 중심으로 플랫폼 리팩토링 및 서비스 고도화 작업을 담당했습니다. 기존 PHP 및 jQuery 기반의 레거시 코드를 점진적으로 Vue.js 구조로 전환하고, 이벤트 개설 및 관리 UI 개선, 다국어 번역, 사용자 맞춤 추천 등 다양한 기능을 구현하여 사용성과 접근성을 향상시켰습니다.
					<br/><br/>
					또한, 2023년 레저사업 부문 인수와 함께 새롭게 런칭된 레저 티켓 구매 서비스 ‘<a href="https://www.onoffmix.com/play">PLAY</a>’ 페이지를 Vue.js로 구축하고, Google Tag Manager를 통한 사용자 행동 이벤트 수집 기능을 추가하여 데이터 기반 운영을 지원했습니다.
					<br/><br/>
					내부 서비스뿐 아니라, 회사의 자금 조달을 위한 외주 프로젝트에도 참여하여 다양한 요구사항을 반영한 프론트엔드 개발 경험을 쌓았습니다. 온오프믹스의 “세상의 모든 모임”이라는 비전 아래, 사용자의 일상 속 경험을 더욱 풍요롭게 만드는 통합 플랫폼 구축에 기여했습니다.</p>
				</div>
			</div>
		</section>
	);
};

export default AboutComponent;