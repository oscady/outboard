import AboutList from '../../components/AboutList/AboutList';
import { useEffect, useState } from 'react';
import { aboutItems } from '../../data/about';
import FullPageComponent from '../../components/FullPageComponent/FullPageComponent';
import FullPageRow from '../../components/FullPageComponent/FullPageRow';
import { About1, About2, About3, About4, About5, About6, About7, About8 } from '../../icons';
import { SalesPitchContainer, SalesItem } from '../../components/SalesPitch/SalesPitch.styled';

const About = (props) => {
	const [ abouts, setAbouts ] = useState([]);

	useEffect(
		() => {
			setAbouts([ aboutItems ]);
		},
		[ aboutItems ]
	);

	return (
		<FullPageComponent rows='1fr 2fr 2fr'>
			{abouts ? (
				<FullPageRow columns='1fr 1fr 1fr'>
					{aboutItems.map((item) => <AboutList key={item.id} header={item.header} bio={item.bio} />)}
				</FullPageRow>
			) : (
				<p>there's no abouts</p>
			)}
			<FullPageRow columns='1fr 1fr'>
				<SalesPitchContainer>
					<SalesItem>
						<About1 width='70px' height='70px' />
						<div>
							<h2>Minimal Subscription</h2>
							<p>£1.99 a month subscription fee. 5 exclusive tracks available to download each month.</p>
						</div>
					</SalesItem>
					<SalesItem>
						<About2 width='70px' height='70px' />
						<div>
							<h2>Discover New Music</h2>
							<p>Discover new artists through bio and about sections of each artist featured.</p>
						</div>
					</SalesItem>
					<SalesItem>
						<About3 width='70px' height='70px' />
						<div>
							<h2>Download Exclusive Content</h2>
							<p>
								Unreleased material, onl available to download and stream by Outboard Members. Access to
								all previous releases in private members area.
							</p>
						</div>
					</SalesItem>
					<SalesItem>
						<About4 width='70px' height='70px' />
						<div>
							<h2>Contribute</h2>
							<p>
								Build a community that pays artists fairly for their work. As our subscriber base grows,
								the more srtists will earn for their productions.
							</p>
						</div>
					</SalesItem>
				</SalesPitchContainer>
				<SalesPitchContainer>
					<SalesItem>
						<About5 width='70px' height='70px' />
						<div>
							<h2>Fair Payment</h2>
							<p>
								We're re-writing the script in how music is accessed by its listeners whilst shaking up
								the way artists are paid for their work.
							</p>
						</div>
					</SalesItem>
					<SalesItem>
						<About6 width='70px' height='70px' />
						<div>
							<h2>Connect With Engaged Listeners</h2>
							<p>
								Outboard is a members' platform that provides its active subsribers with a bundle of
								exclusive music each month for next to nothing.
							</p>
						</div>
					</SalesItem>
					<SalesItem>
						<About7 width='70px' height='70px' />
						<div>
							<h2>Power in Numbers</h2>
							<p>
								By keeping the subscription rate low, we generate a larger user base. The monthly
								subscription revenue (after transaction fees) is then split equally between that months
								artists and Outboard. As the community grows, so does the revenue fr artists.
							</p>
						</div>
					</SalesItem>
					<SalesItem>
						<About8 width='70px' height='70px' />
						<div>
							<h2>Perpetuate</h2>
							<p>
								Continue sales once the exlusive release period is over through our online members'
								store. Subscribers will have access to purchase the Outboard back catalogue at normal
								market rate.{' '}
								<span style={{ fontWeight: 'bold' }}>Artists receive 100% this revenue</span> (after
								online transaction fees).
							</p>
						</div>
					</SalesItem>
				</SalesPitchContainer>
			</FullPageRow>
		</FullPageComponent>
	);
};

export default About;
