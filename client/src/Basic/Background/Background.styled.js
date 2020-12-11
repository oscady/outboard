import styled from 'styled-components';

export const BackgroundStyled = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	z-index: -10;
	background: url(${(props) => props.background});
	background-position: 50% 50%;
	background-size: 33% 100%;
	background-repeat: no-repeat;
`;
