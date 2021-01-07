import React from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';
import Audio from './Audio';

const Container = styled.div`
	border-radius: 5px 5px 0 0;
	height: 60px;
	z-index: 101;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	color: #27117c;
	box-sizing: border-box;
	background-color: black;
`;

const Controls = styled.div`
	margin: 0;
	position: absolute;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	align-items: center;
	width: 100%;
`;

export function Top(props) {
	return (
		<Container>
			{/* <Cover src={props.track.cover} alt='cover' /> */}
			<Controls>
				<Audio url={props.url} />
			</Controls>
			{/* <Info>
				<Author>{props.track.author} - </Author>
				<Title>{props.track.title}</Title>
			</Info> */}
		</Container>
	);
}

Top.propTypes = {
	track: PropsTypes.object
};
