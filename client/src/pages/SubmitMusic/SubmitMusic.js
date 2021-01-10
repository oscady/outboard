import { PageContainer } from '../Basic/PageContainer.styled';
import FullPageRow from '../../components/FullPageComponent/FullPageRow';
import FullPageComponent from '../../components/FullPageComponent/FullPageComponent';
import Submit1 from '../../icons/Submit1';
import Submit2 from '../../icons/Submit2';
import Submit3 from '../../icons/Submit3';
import Submit4 from '../../icons/Submit4';
import SubmitFlowArrow from '../../icons/SubmitFlowArrow';
import styled from 'styled-components';

const Row = styled.div`
	position: relative;
	height: auto;
	min-height: 1px;
	width: 100%;
	display: grid;
	grid-template-columns: ${(props) => props.columns};
	gap: 15px;
	height: 300px;
	padding-top: 50px;
	align-items: flex-start;
	justify-content: center;
	background-color: ${(props) => props.theme.eggShell};
`;

const Item = styled.div`
	height: 100%;
	width: 100%;
	padding: 0px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	svg {
		margin: 0 auto;
		margin-bottom: 25px;
	}

	h3 {
		font-size: 1.4rem;
		font-weight: bold;
		color: black;
		text-align: color-interpolation-filters;
		margin: 0 auto;
		margin-top: 5px;

		span {
			opacity: 0.3;
		}
	}

	p {
		font-size: 0.8rem;
		font-weight: light;
		color: black;
		text-align: color-interpolation-filters;
		margin: 0 auto;
		margin-top: 5px;

		span {
			opacity: 0.3;
		}
	}
`;
const SubmitMusic = () => {
	return (
		<PageContainer>
			<FullPageComponent rows='1fr 1fr'>
				<Row
					style={{ hegiht: '300px', alignItems: 'center !important' }}
					columns='400px 12% 1fr 12% 1fr 12% 1fr 12% 400px'>
					<span />
					<Item>
						<Submit1 width='100px' height='100px' />
						<h3>
							<span>1.</span>SUBMIT
						</h3>
						<p>Submit music to Outboard.</p>
					</Item>
					<SubmitFlowArrow width='80px' height='100px' />
					<Item>
						<Submit2 width='100px' height='100px' />
						<h3>
							<span>2.</span>RELEASE
						</h3>
						<p>Successful submissions get scheduled for release.</p>
					</Item>
					<SubmitFlowArrow width='80px' height='100px' />
					<Item>
						<Submit3 width='100px' height='100px' />
						<h3>
							<span>3.</span>SHARE
						</h3>
						<p>Promote upcoming release through all social channels.</p>
					</Item>
					<SubmitFlowArrow width='80px' height='100px' />
					<Item>
						<Submit4 width='100px' height='100px' />
						<h3>
							<span>4.</span>GET PAID
						</h3>
						<p>Mre subscribers, higher artist revenue.</p>
					</Item>
					<span />
				</Row>
				<Row columns='1fr 1fr'>
					<div>writing</div>
					<div>form</div>
				</Row>
			</FullPageComponent>
		</PageContainer>
	);
};

export default SubmitMusic;
