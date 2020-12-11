import { LoginComponentStyled, LoginFields } from './LoginComponent.styled';
import { SubscribeFields } from './Subscribe.styled';
import { InfoStyled } from './Info.styled';
const LoginComponent = (props) => {
	return (
		<LoginComponentStyled>
			<LoginFields>
				<h1>login</h1>
				<input type='email' placeholder='Username/email' />
				<input type='password' placeholder='Password' />
				<a>login</a>
			</LoginFields>
			<SubscribeFields>
				<div>
					<p>Don't have an account?</p>
					<p>GBP £1.99 per month</p>
				</div>
				<a onClick={props.register}>subscribe to outboard</a>
			</SubscribeFields>
			<InfoStyled>
				<div>
					<h3>contact / submit music</h3>
					<a href='team@outboardmusic.com'>team@outboardmusic.com</a>
				</div>
				<div>
					<a>FAQs</a>
					<a>TERMS OF SERVICE</a>
				</div>
			</InfoStyled>
		</LoginComponentStyled>
	);
};

export default LoginComponent;
