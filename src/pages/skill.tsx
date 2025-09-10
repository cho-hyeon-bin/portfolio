// import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/sass/view/skill.sass";
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
            <img src="/src/assets/image/logo/html-icon.svg" alt="html-icon" />
            <div>
              <p>html5</p>
              <p>시맨틱 마크업, 접근성, SEO 최적화</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/vue.svg" alt="vue-icon" />
            <div>
              <p>Vue.js</p>
              <p>컴포넌트/상태 관리(Pinia/Vuex), 라우팅</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/javascript.svg" alt="js-icon" />
            <div>
              <p>JavaScript</p>
              <p>ES6+, 비동기 처리, 성능 최적화</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/typescript.svg" alt="ts-icon" />
            <div>
              <p>TypeScript</p>
              <p>타입 안전 설계, 인터페이스/제네릭</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/react.svg" alt="react-icon" />
            <div>
              <p>React.js</p>
              <p>훅 기반 상태 관리, 컴포넌트 리팩토링</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/jquery.svg" alt="jquery-icon" />
            <div>
              <p>jQuery</p>
              <p>레거시 유지보수, 점진적 마이그레이션</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/css.svg" alt="html-css-icon" />
            <div>
              <p>CSS3</p>
              <p>반응형 레이아웃, Flex/Grid</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/sass.svg" alt="sass-icon" />
            <div>
              <p>Sass</p>
              <p>모듈화, 변수/믹스인, 일관된 디자인</p>
            </div>
          </div>
          <div className="skill-box">
            <img
              src="/src/assets/image/logo/tailwind-css.svg"
              alt="tailwind-icon"
            />
            <div>
              <p>Tailwind CSS</p>
              <p>유틸리티 퍼스트, 빠른 프로토타이핑</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/github.svg" alt="git-icon" />
            <div>
              <p>Git</p>
              <p>브랜치 전략, 코드 리뷰 협업</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/jira.svg" alt="jira-icon" />
            <div>
              <p>Jira</p>
              <p>스프린트 계획, 이슈 트래킹</p>
            </div>
          </div>
          <div className="skill-box">
            <img src="/src/assets/image/logo/wiki.png" alt="confluence-icon" />
            <div>
              <p>Confluence</p>
              <p>문서화, 지식 관리</p>
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
					</Slider> */}
        </div>
      </div>
    </section>
  );
};

export default SkillComponent;
