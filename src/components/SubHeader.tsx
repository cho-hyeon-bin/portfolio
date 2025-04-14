import '@/sass/common/components/header.sass';
interface HeaderProps {
	title: string;
}
const SubHeader = ({ title }: HeaderProps) => {
	return (
		<div className="sub-header-wrap">
			<div className="header-box">
				<div>
					{title}
				</div>
			</div>
		</div>
	);
};

export default SubHeader;