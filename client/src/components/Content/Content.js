import { ContentStyled } from './Content.styled';

const Content = (props) => {
	return <ContentStyled playing={props.playing}>{props.children}</ContentStyled>;
};

export default Content;
