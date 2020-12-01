import { FullPageComponentStyled, FullPageColumnStyled } from './FullPageComponent.styled';

const FullPageComponent = (props) => {
	return <FullPageComponentStyled rows={props.rows}>{props.children}</FullPageComponentStyled>;
};

export default FullPageComponent;
