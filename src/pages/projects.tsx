import '@/sass/view/projects.sass'
const ProjectsComponent = () => {
	return (
		<section className="projects-container">
			<div className="projects-wrap">
				<div className="title">
					<span>projects</span>
				</div>
				<div className="project-list">
					<div className="project-box">
						<div className="img-box">
							<img src="/src/assets/image/marketbang-new.png" alt="onoffmix" />
						</div>
						<div className="discription-box">
							<span>MAKETBANG</span>
							<p>마켓뱅은 소매상 점주들이 모바일에서 와인을 쉽고 빠르게 발주할 수 있는 B2B 플랫폼입니다.<br/><br/>100여 개 수입사와 5,000여 개 상품을 연동하며, 실시간 재고 조회부터 공동구매까지 와인 유통에 최적화된 기능을 제공합니다.</p>
							<button><span>see project</span></button>
						</div>
					</div>
					<div className="project-box">
						<div className="img-box">
							<img src="/src/assets/image/koita-new.png" alt="onoffmix" />
						</div>
						<div className="discription-box">
							<span>KOITA 기술경영인 하계포럼</span>
							<p>국내 최대 규모의 기술경영 행사 ‘기술경영인 하계포럼’을 위한 신청·운영 시스템을 개발했습니다.<br/><br/>참가자와 관리자가 효율적으로 소통하고 정보를 관리할 수 있도록 지원하는 웹 기반 신청 시스템을 제공합니다.</p>
							<button><span>see project</span></button>
						</div>
					</div>
					<div className="project-box">
						<div className="img-box">
							<img src="/src/assets/image/ksa-new.png" alt="onoffmix" />
						</div>
						<div className="discription-box">
							<span>KSA CEO Forum</span>
							<p>70회를 넘긴 전통의 ‘KSA 하계 CEO 포럼’은 국내외 주요 인사들과 함께 정책과 경영을 논의하는 대표적인 경영자 교류 행사입니다.<br/><br/>포럼 참가자와 운영진을 위한 신청 및 운영 시스템을 개발하여 전 과정을 디지털화하고 효율성을 극대화하는 데 중점을 두었습니다.</p>
							<button><span>see project</span></button>
						</div>
					</div>
					<div className="project-box">
						<div className="img-box">
							<img src="/src/assets/image/pco-new.png" alt="onoffmix" />
						</div>
						<div className="discription-box">
							<span>PROMICE</span>
							<p>컨벤션 분야 진출을 희망하는 청년과 실습 인턴 채용을 원하는 기업을 연결하는 채용 및 취업 매칭 서비스입니다. <br/><br/>컨벤션 산업 전문 인력 육성과 실무 경험 기회 제공에 중점을 두었습니다.</p>
							<button><span>see project</span></button>
						</div>
					</div>
				</div>
				<button type="button" className="more-btn"><span>show more projects</span></button>
			</div>
		</section>
	)
}
export default ProjectsComponent;