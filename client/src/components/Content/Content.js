import { ContentStyled } from './Content.styled';

const Content = (props) => {
	return <ContentStyled>{props.children}</ContentStyled>;
};

export default Content;
