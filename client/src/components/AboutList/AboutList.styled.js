import styled from 'styled-components';

export const AboutListStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	flex-wrap: nowrap;
	overflow: hidden;

	h3 {
		text-align: left;
		color: ${({ theme }) => theme.primaryDark};
		font-size: 1.9rem;
		text-transform: uppercase;
		white-space: nowrap;
		font-weight: bold;
		margin: 5px;
		margin-bottom: 20px;
	}

	p {
		text-align: left;
		color: ${({ theme }) => theme.primaryDark};
		font-size: 1rem;
		font-weight: lighter;
		line-height: 1.8rem;
		margin: 5px;
	}

	div {
		margin-bottom: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		a {
			font-weight: bold;
			font-size: 1.4rem;
			text-align: left;
		}
	}
`;
