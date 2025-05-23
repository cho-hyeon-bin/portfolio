import '@/sass/view/contact.sass'
const ContactComponent = () => {
	return (
		<section className="contact-wrap">
			<div className="title">
				<span>newsletter</span>
			</div>
			<b>저에 대해 더 알고 싶으신가요?</b><br/>
			<p>
				아래에 이메일을 입력해 뉴스레터를 구독하시면, 저의 이력서와 경력기술서를 정리하여 메일로 보내드립니다. <br/>저의 경험과 기술 스택, 프로젝트 이야기를 자세히 담았습니다.
			</p>
			<div className="form-wrap">
				<form
					onSubmit={(event) => {
						event.preventDefault();
						alert("준비중입니다.");
					}}
				>
					<input type="text" placeholder="이메일을 입력해주세요."/>
					<button type="submit" >SUBMIT</button>
				</form>
			</div>
		</section>
	)
}
export default ContactComponent;