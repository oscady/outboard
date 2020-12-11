import { AboutFooterItemStyled } from './AboutFooter.styled';
import { FullPageRowStyled } from '../FullPageComponent/FullPageComponent.styled';

const AboutFooter = (props) => {
	return (
		<FullPageRowStyled columns='1fr 1fr'>
			<AboutFooterItemStyled>
				<h1>Equalising the Underground</h1>
				<br />
				<p>All successful artists started somewhere.</p>
				<p>
					We are equalising the underground, creating a shared space for established artists and up-and-coming
					talented producers working toward the common goal of releasing and sharing quality music.
				</p>
			</AboutFooterItemStyled>
			<AboutFooterItemStyled>
				<h1>Fundraising Initiative</h1>
				<h2>Supporting Charitable Causes in Music</h2>
				<p>
					In line with our ethos of giving back and providing opportunities in music for all, we will be
					announcing ongoing subscription milestones.
				</p>
				<p>
					When these targets are reached, we will work in partnership to fund a wide range ofcharitable
					organisations that are already doing positive work in the music community.
				</p>
				<br />
				<h2>
					Outboard is a full cycle approach to the development and wellbeing of electronic music endeavours
					across the board.
				</h2>
			</AboutFooterItemStyled>
		</FullPageRowStyled>
	);
};

export default AboutFooter;
