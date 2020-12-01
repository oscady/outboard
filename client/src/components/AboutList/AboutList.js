import { AboutListStyled } from './AboutList.styled';

const AboutList = (props) => {
	return (
		<AboutListStyled>
			<h3>{props.header}</h3>
			<p>{props.bio}</p>
		</AboutListStyled>
	);
};

export default AboutList;
