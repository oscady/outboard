import { useState, Fragment } from 'react';
import { LoginStyled } from './Login.styled';
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import Background from '../../components/Basic/Background/Background';
import RegisterComponent from '../../components/RegisterComponent/RegisterComponent';

const Login = (props) => {
	const [ user, setUser ] = useState(true);

	const register = () => {
		setUser(!user);
	};

	return user ? (
		<LoginStyled>
			<Background background='https://cdn.mems.lol/outboard/keyboard-image.png' />
			<LoginComponent register={register} />
		</LoginStyled>
	) : (
		<LoginStyled>
			<Background background='https://cdn.mems.lol/outboard/keyboard-image.png' />
			<RegisterComponent register={register} />
		</LoginStyled>
	);
};

export default Login;
