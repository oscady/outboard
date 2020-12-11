import { Fragment } from 'react';
import { SalesPitchContainer, SalesItem, SalesModels } from './SalesPitch.styled';
import { About1, About2, About3, About4, About5, About6, About7, About8 } from '../../icons';

const SalesPitch = (props) => {
	return (
		<Fragment>
			<SalesPitchContainer>
				<h1>SUBSCRIBERS</h1>
				<h1>ARTISTS</h1>
				<SalesItem>
					<About1 width='90px' height='90px' />
					<div>
						<h2>Minimal Subscription</h2>
						<p>£1.99 a month subscription fee. 5 exclusive tracks available to download each month.</p>
					</div>
				</SalesItem>
				<SalesItem>
					<About5 width='90px' height='90px' />
					<div>
						<h2>Fair Payment</h2>
						<p>
							We're re-writing the script in how music is accessed by its listeners whilst shaking up the
							way artists are paid for their work.
						</p>
					</div>
				</SalesItem>
				<SalesItem>
					<About2 width='90px' height='90px' />
					<div>
						<h2>Discover New Music</h2>
						<p>Discover new artists through bio and about sections of each artist featured.</p>
					</div>
				</SalesItem>
				<SalesItem>
					<About6 width='90px' height='90px' />
					<div>
						<h2>Connect With Engaged Listeners</h2>
						<p>
							Outboard is a members' platform that provides its active subsribers with a bundle of
							exclusive music each month for next to nothing.
						</p>
					</div>
				</SalesItem>
				<SalesItem>
					<About3 width='90px' height='90px' />
					<div>
						<h2>Download Exclusive Content</h2>
						<p>
							Unreleased material, onl available to download and stream by Outboard Members. Access to all
							previous releases in private members area.
						</p>
					</div>
				</SalesItem>
				<SalesItem>
					<About7 width='90px' height='90px' />
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
					<About4 width='90px' height='90px' />
					<div>
						<h2>Contribute</h2>
						<p>
							Build a community that pays artists fairly for their work. As our subscriber base grows, the
							more srtists will earn for their productions.
						</p>
					</div>
				</SalesItem>
				<SalesItem>
					<About8 width='90px' height='90px' />
					<div>
						<h2>Perpetuate</h2>
						<p>
							Continue sales once the exlusive release period is over through our online members' store.
							Subscribers will have access to purchase the Outboard back catalogue at normal market rate.{' '}
							<span style={{ fontWeight: 'bold' }}>Artists receive 100% this revenue</span> (after online
							transaction fees).
						</p>
					</div>
				</SalesItem>
				<SalesModels>
					<div>
						<h2>CURRENT MODELS</h2>
						<p>
							The current market leaders in digital downloads take a huge percentage of the profit from
							sales
						</p>
						<div>
							<h3>BEATPORT</h3>
							<h3>60%</h3>
						</div>
						<div>
							<h3>TRAXSOURCE</h3>
							<h3>40%</h3>
						</div>
						<div>
							<h3>ITUNES</h3>
							<h3>30%</h3>
						</div>
						<div>
							<h3>BANDCAMP</h3>
							<h3>15-20%</h3>
						</div>
					</div>
				</SalesModels>
				<SalesModels>
					<div>
						<h2>Outboard commission from individual back catalogue track purchases:</h2>
						<h1>0%</h1>
					</div>
				</SalesModels>
			</SalesPitchContainer>
		</Fragment>
	);
};

export default SalesPitch;
