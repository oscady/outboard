import { FooterStyled } from './Footer.styled';
import LogoContainer from '../NavBar/LogoContainer/LogoContainer';
import LogoIcon from '../../icons/LogoIcon';

const Footer = (props) => {
	return (
		<FooterStyled>
			<LogoContainer>
				<LogoIcon width='80px' height='80px' />
			</LogoContainer>
		</FooterStyled>
	);
};

export default Footer;
