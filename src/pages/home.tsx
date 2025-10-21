import '@/sass/view/home.sass'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin);

const HomeComponent = () => {
	const textRef = useRef<HTMLParagraphElement>(null);
	const cursorRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (textRef.current) {
			const text = "front-end.web(developer)";
			textRef.current.textContent = ''; 
			
			gsap.set(cursorRef.current, { opacity: 0 });
			gsap.to(textRef.current, {
				duration: 2,
				text: text,
				ease: "none",
				onComplete: () => {
					console.log("애니메이션 완료");
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

	const scrollTo = (selector: string) => {
		const el = document.querySelector(selector);
		if (el) {
			(el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
	
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
				<li><button type="button" onClick={() => scrollTo('.main-wrap')}>home</button></li>
				<li><button type="button" onClick={() => scrollTo('.about-container')}>about me</button></li>
				<li><button type="button" onClick={() => scrollTo('.projects-container')}>projects</button></li>
				<li><button type="button" onClick={() => scrollTo('.skill-container')}>skill</button></li>
				<li><button type="button" onClick={() => scrollTo('.contact-wrap')}>contact</button></li>
			</ul>
			<div className="main-title">
				<p ref={textRef}>front-end.web(developer)</p>
				<span ref={cursorRef} className="cursor">|</span>
			</div>
		</section>
	);
};

export default HomeComponent