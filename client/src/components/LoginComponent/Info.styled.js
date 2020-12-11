import styled from 'styled-components';

export const InfoStyled = styled.div`
	width: 100%;
	position: absolute;
	height: 100px;
	left: 0;
	right: 0;
	bottom: 0;

	display: flex;
	flex-direction: row;
	align-content: space-between;

	div {
		&:first-child {
			width: 50%;
			display: flex;
			padding-bottom: 20px;
			align-items: flex-start;
			justify-content: flex-end;
			flex-direction: column;

			h3 {
				font-weight: bold;
				text-transform: uppercase;
				font-size: 1.3rem;
				text-align: left;
				margin-bottom: 5px;
			}

			a {
				font-size: 1.1rem;
				text-align: left;
			}
		}

		&:last-child {
			width: 50%;
			display: flex;
			padding-bottom: 20px;
			align-items: flex-end;
			flex-direction: row;

			h3 {
				font-weight: bold;
				text-transform: uppercase;
				font-size: 1.3rem;
				margin: 0 auto;
				text-align: left;
			}

			a {
				font-weight: bold;
				font-size: 1.1rem;
				text-align: left;
				margin-right: 60px;
			}
		}
	}
`;
