import styled from 'styled-components';

export const AboutListStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
	margin-top: 30px;
	flex-wrap: nowrap;
	overflow: hidden;

	h3 {
		text-align: left;
		color: ${({ theme }) => theme.primaryDark};
		font-size: 1.5rem;
		text-transform: uppercase;
		font-weight: bold;
		margin: 5px;
	}

	p {
		text-align: left;
		color: ${({ theme }) => theme.primaryDark};
		font-size: 1rem;
		text-transform: capitalize;
		font-weight: lighter;
		line-height: 1.2rem;
		margin: 5px;
	}

	div {
		margin-bottom: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		a {
			font-weight: bold;
			font-size: 1.2rem;
			text-align: left;
		}
	}
`;
