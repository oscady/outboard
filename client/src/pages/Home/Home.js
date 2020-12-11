import AboutList from '../../components/AboutList/AboutList';
import Release from '../../components/Release/Release';
import { useEffect, useState } from 'react';
import { aboutItems } from '../../data/about';
import { releaseItems } from '../../data/releases';
import Subscribe from '../../components/Subscribe/Subscribe';
import FullPageComponent from '../../components/FullPageComponent/FullPageComponent';
import FullPageRow from '../../components/FullPageComponent/FullPageRow';
import Background from '../../components/Basic/Background/Background';

const Home = (props) => {
	const [ releases, setReleases ] = useState([]);
	const [ abouts, setAbouts ] = useState([]);

	useEffect(
		() => {
			const these = releaseItems.slice(0, 2);
			setReleases([ ...these ]);
			setAbouts([ aboutItems ]);
		},
		[ releaseItems, aboutItems ]
	);

	return (
		<FullPageComponent rows='2fr 1fr'>
			<Background background='https://cdn.mems.lol/outboard/keyboard-image.png' />
			{releases ? (
				<FullPageRow columns='1fr 1fr 1fr'>
					{releases.map((release) => (
						<Release
							key={release.id}
							header={release.header}
							artwork={release.artwork}
							title={release.title}
							artists={release.artists}
							date={release.date}
						/>
					))}
					<Subscribe />
				</FullPageRow>
			) : (
				<p>there's no releaes</p>
			)}
			{abouts ? (
				<FullPageRow columns='1fr 1fr 1fr'>
					{aboutItems.map((item) => <AboutList key={item.id} header={item.header} bio={item.bio} />)}
				</FullPageRow>
			) : (
				<p>there's no abouts</p>
			)}
		</FullPageComponent>
	);
};

export default Home;
