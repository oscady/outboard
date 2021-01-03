import AboutList from '../../components/AboutList/AboutList';
import { useEffect, useState } from 'react';
import { aboutItems } from '../../data/about';
import FullPageComponent from '../../components/FullPageComponent/FullPageComponent';
import FullPageRow from '../../components/FullPageComponent/FullPageRow';
import SalesPitch from '../../components/SalesPitch/SalesPitch';
import Background from '../../components/Basic/Background/Background';
import AboutFooter from '../../components/AboutFooter/AboutFooter';
import { PageContainer } from '../Basic/PageContainer.styled';

const About = (props) => {
	const [ abouts, setAbouts ] = useState([]);

	useEffect(
		() => {
			setAbouts([ aboutItems ]);
		},
		[ aboutItems ]
	);

	return (
		<PageContainer>
			<FullPageComponent rows='auto auto auto'>
				{/* <Background background='https://cdn.mems.lol/outboard/leaves-image.png' /> */}
				{abouts ? (
					<FullPageRow style={{ backgroundColor: 'black !important' }} columns='1fr 1fr 1fr'>
						{aboutItems.map((item) => <AboutList key={item.id} header={item.header} bio={item.bio} />)}
					</FullPageRow>
				) : (
					<p>there's no abouts</p>
				)}
				<FullPageRow columns='1fr'>
					<SalesPitch />
				</FullPageRow>
				<FullPageRow columns='auto'>
					<AboutFooter />
				</FullPageRow>
			</FullPageComponent>
		</PageContainer>
	);
};

export default About;
