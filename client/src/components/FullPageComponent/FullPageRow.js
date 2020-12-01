import { FullPageRowStyled } from './FullPageComponent.styled';

const FullPageRow = (props) => {
	return <FullPageRowStyled columns={props.columns}>{props.children}</FullPageRowStyled>;
};

export default FullPageRow;
