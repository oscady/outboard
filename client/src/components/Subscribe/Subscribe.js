import { SubscribeStyled } from './Subscribe.styled';

const Subscribe = () => {
	return (
		<SubscribeStyled>
			<p>Don't have an account?</p>
			<button>Subscribe</button>
			<h3 style={{ marginBottom: '40px' }}>GBP £1.99 per month</h3>
			<button style={{ marginBottom: '60px' }}>Submit Music</button>
			<br />
			<h3>CONTACT / SUBMIT MUSIC</h3>
			<p>team@outboardmusic.com</p>
		</SubscribeStyled>
	);
};

export default Subscribe;
