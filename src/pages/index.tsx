import Home from '@/pages/home.tsx';
import About from '@/pages/about.tsx';
import Skill from '@/pages/skill.tsx';
// import Contact from '@/pages/contact.tsx';
import Projects from '@/pages/projects.tsx';

const Index = () => {
	return (
		<div>
			<Home />
			<About />
			<Skill />
			<Projects />
			{/* <Contact /> */}
		</div>
	);
};

export default Index;