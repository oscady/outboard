import styled from 'styled-components';

export const BackgroundStyled = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 0;
	background: url(${(props) => props.background});
	background-position: 50% 50%;
	background-size: 35% 95%;
	background-repeat: no-repeat;
	opacity: 8%;
`;
