import { FullPageComponentStyled, FullPageColumnStyled } from './FullPageComponent.styled';

const FullPageComponent = (props) => {
	return (
		<FullPageComponentStyled background={props.background} rows={props.rows}>
			{props.children}
		</FullPageComponentStyled>
	);
};

export default FullPageComponent;
