import styled from 'styled-components';

const ContentStyled = styled.div`
	height: 100%;
	width: 100%;
	background-color: #1b3679;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	position: relative;
`;
const Content = (props) => {
	return <ContentStyled>{props.children}</ContentStyled>;
};

export default Content;
