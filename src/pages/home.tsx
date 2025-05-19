import '@/sass/view/home.sass'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin);

const HomeComponent = () => {
	const textRef = useRef<HTMLParagraphElement>(null);
	const cursorRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (textRef.current) {
			const text = "front-end.web(developer)"; // 직접 텍스트 지정
			textRef.current.textContent = ''; // 초기 텍스트 비우기
			
			gsap.set(cursorRef.current, { opacity: 0 });
			gsap.to(textRef.current, {
				duration: 2,
				text: text,
				ease: "none",
				onComplete: () => {
					console.log("애니메이션 완료"); // 디버깅을 위한 로그 추가
					gsap.to(cursorRef.current, {
						opacity: 1,
						duration: 0.3,
						onComplete: () => {
							gsap.to(cursorRef.current, {
								opacity: 0,
								duration: 0.5,
								repeat: -1,
								yoyo: true,
								ease: "power1.inOut"
							});
						}
					});
				}
			});
		}
	}, []);

	return (
		<section className="main-wrap">	
			<div className="header-box">
				<span>CHOHYEONBIN .</span>
				<div>
					<span>fe portfolio</span>
					<span>hire me!</span>
				</div>
			</div>
			<ul>
				<li><Link to="/">home</Link></li>
				<li><Link to="/about">about me</Link></li>
				<li><Link to="/projects">projects</Link></li>
				<li><Link to="/skill">skill</Link></li>
				<li><Link to="/contact">contact</Link></li>
			</ul>
			<div className="main-title">
				<p ref={textRef}>front-end.web(developer)</p>
				<span ref={cursorRef} className="cursor">|</span>
			</div>
		</section>
	);
};

export default HomeComponent