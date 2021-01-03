import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Tracks from '../Tracks/Tracks';
import styled from 'styled-components';

const ItemList = styled.ul`
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: pink;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;

	li {
		display: flex;
		flex-direction: row;
		background-color: lightpink;
		align-content: center;
		justify-content: space-between;
		margin-top: 5px;
	}
`;

const TracksModal = (props) => {
	const { buttonLabel, className } = props;

	const [ modal, setModal ] = useState(false);

	const toggle = () => setModal(!modal);

	const addItem = (id) => {
		props.setTracks([ ...props.tracks, id ]);
		console.log(props.tracks);
	};

	return (
		<div>
			<Button color='danger' onClick={toggle}>
				{buttonLabel}
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Modal title</ModalHeader>
				<ModalBody>
					<ItemList>
						{props.uploadedTracks.map((item) => (
							<li>
								<p>
									{item.artistName} - ' {item.trackName}
								</p>
								<p onClick={() => addItem(item._id)}>add track</p>
							</li>
						))}
					</ItemList>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={toggle}>
						Do Something
					</Button>{' '}
					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default TracksModal;
