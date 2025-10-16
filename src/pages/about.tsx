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
						<a href="/src/assets/file/career.pdf" download="조현빈 경력기술서.pdf" className="dl-box"><span>RESUME</span></a>
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
					<p>
						국내 최대 종합 이벤트 플랫폼 <b>온오프믹스</b>에서 프론트엔드 개발자로 근무하며, 
						Vue.js 기반의 플랫폼 리팩토링과 서비스 고도화를 주도했습니다. 
						기존 PHP·jQuery 기반의 레거시 코드를 점진적으로 Vue.js 구조로 전환하여 
						유지보수성을 높이고, 반복되는 기능을 컴포넌트화하여 <b>개발 생산성</b>과 &nbsp; 
						<b>코드 일관성</b>을 강화했습니다. 
						또한 이벤트 개설·관리 UI를 사용자 친화적으로 개선하고, 
						다국어 지원 및 사용자 맞춤형 추천 기능을 추가하여&nbsp; 
						<b>국내외 다양한 사용자층</b>이 편리하게 서비스를 이용할 수 있도록 기여했습니다.
						<br/><br/>
						2023년에는 레저사업 부문 인수와 함께 새롭게 런칭된 
						레저 티켓 구매 서비스 <a href="https://www.onoffmix.com/play"><b>PLAY</b></a> 페이지를 
						Vue.js로 구축했습니다. 단순한 예약 기능을 넘어, 
						상품 리스트·필터링·결제 UI 전반을 설계하고, 
						Google Tag Manager와 연계한 사용자 행동 이벤트 수집 기능을 구현하여 
						데이터 기반의 <b>마케팅 및 서비스 운영</b>을 지원했습니다. 
						이를 통해 회사는 신규 레저 서비스의 시장 진입을 빠르게 추진할 수 있었으며, 
						사용자 경험 향상과 더불어 <b>비즈니스 성과</b>에도 기여할 수 있었습니다.
						<br/><br/>
						온오프믹스 내 핵심 프로젝트 외에도, 
						외부 클라이언트를 위한 다양한 웹 서비스 개발에 참여하여 
						요구사항 분석부터 화면 설계, UI 개발, 테스트 및 유지보수까지 
						프로젝트 전 과정을 경험했습니다. 
						이를 통해 서비스 성격과 규모에 따라 적합한 기술 스택과 구조를 선택하는&nbsp; <b>문제 해결 능력</b>을 키웠으며, 
						사용자의 요구와 비즈니스 목표를 동시에 충족시키는&nbsp;<b>실무 중심의 개발 역량</b>을 쌓을 수 있었습니다. 
						온오프믹스의 “세상의 모든 모임”이라는 비전 아래, &nbsp;<b>통합 플랫폼</b> 구축에 꾸준히 기여했습니다.
					</p>

				</div>
			</div>
		</section>
	);
};

export default AboutComponent;