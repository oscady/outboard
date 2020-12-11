import { RegisterComponentStyled, RegisterFields } from './RegisterComponent.styled';

const RegisterComponent = (props) => {
	return (
		<RegisterComponentStyled>
			<h1>subscribe to outboard</h1>
			<RegisterFields>
				<input type='email' placeholder='Username/email' />
				<input type='password' placeholder='Password' />
			</RegisterFields>
			<RegisterFields>
				<input type='text' placeholder='First Name' />
				<input type='text' placeholder='Last Name' />
			</RegisterFields>
			<RegisterFields>
				<input type='text' placeholder='Natianality' />
				<input type='Text' placeholder='How did you hear about us?' />
			</RegisterFields>
			<RegisterFields>
				<input type='Text' placeholder='etc' />
				<a>
					NEXT ><span />
				</a>
			</RegisterFields>
			<RegisterFields>
				<a onClick={props.register}>cancel</a>
			</RegisterFields>
		</RegisterComponentStyled>
	);
};

export default RegisterComponent;
