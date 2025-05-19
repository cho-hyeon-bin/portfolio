import { useEffect } from 'react';
import '@/sass/view/about.sass'
const AboutComponent = () => {
	useEffect(() => {
		
	}, []);
	return (
		<section className="about-wrap">
			<div className="title">
				<span>about me</span>
			</div>
			<div className="profile-box">
				<div className="img-box"></div>
				<div>
					<h1>프론트엔드 엔지니어 조현빈입니다</h1>
					<p>사용자 경험을 중심에 두고 생각하는 프론트엔드 개발자입니다. Vue.js, JavaScript, TypeScript 등 다양한 기술을 활용해 직관적이고 효율적인 웹 애플리케이션을 개발해왔습니다. 사용자의 관점에서 복잡한 비즈니스 로직을 단순하고 명확하게 구현하는 데 집중하며, 휴먼 에러를 최소화할 수 있는 UI/UX 설계를 중요하게 생각합니다. 프로젝트마다 더 나은 사용자 인터페이스를 고민하고, 협업과 커뮤니케이션을 통해 완성도 높은 결과물을 만들어내는 것을 중요하게 여깁니다. 새로운 기술을 배우고 적용하는 데 주저하지 않으며, 사용자에게 가치 있는 경험을 제공하기 위해 끊임없이 발전하고 있습니다.</p>
				</div>
			</div>
		</section>
	);
};

export default AboutComponent;