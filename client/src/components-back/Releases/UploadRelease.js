import { useEffect, useState } from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import Styled from 'styled-components';
import { addRelease, getReleases } from '../../actions/releaseActions';
import { getTracks } from '../../actions/trackUploadActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { artists } from '../../data/artists';
import TracksModal from './TrackModal';

const ButtonContainer = Styled.div`
  height: 150px;
  width: 100%;
  position:absolute;
  bottom: 0;
  left:0;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const FormContainer = Styled.div`
position: relative;
  height: 50%%
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px;
`;
const Container = Styled.div`
position: relative;
  height: calc(100vh - 100px);
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const Preview = Styled.div`
	position: relative;
	height: 50%;
	width: 100%;
	background-color: red;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: space-between;
	justify-content: center;
`;

const Image = Styled.div`
	height: 300px;
	width: 300px;
	align-items: center;
	justify-content: center;

	img {
		height: 100%;
		width: 100%;
	}
`;

const Tracks = Styled.div`
	height: 200px;
	width: 400px;
	align-items: center;
	justify-content: center;
	background-color: green;

	li {
		font-size: 2rem;
		text-align: left;
		color:black;
	}
	`;

const UploadRelease = (props) => {
	const [ name, setName ] = useState('');
	const [ artists, setArtists ] = useState([]);
	const [ items, setItems ] = useState([]);
	const [ artwork, setArtwork ] = useState('');
	const [ uploadedTracks, setUploadedTracks ] = useState([]);
	const [ dropdownOpen, setDropdownOpen ] = useState(false);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	useEffect(
		() => {
			props.getTracks();
			setUploadedTracks(props.track.tracks);
			console.log(items);
		},
		[ name ]
	);

	const clearForm = () => {
		setName('');
		setArtists([]);
		setItems([]);
		setArtwork('');
	};

	const onSubmit = (e) => {
		e.preventDefault();

		let formData = new FormData();

		formData.append('name', name);
		formData.append('artists', artists);
		//formData.append('tracks', items);
		formData.append('artwork', artwork);

		for (var y = 0; y < 5; y++) {
			formData.append('tracks[]', items[y]);
		}
		console.log(items);
		console.log(formData);
		props.addRelease(formData);

		clearForm();
	};

	return (
		<Container>
			<Form onSubmit={onSubmit} action='/cms' style={{ height: '50%', width: '100%' }}>
				<FormContainer>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='name'>
							Release Title
						</Label>
						<Input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='artists'>
							artists
						</Label>
						<Input
							type='text'
							name='artists'
							value={artists}
							onChange={(e) => setArtists(...artists, e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='tracks'>
							tracks
						</Label>
						<TracksModal
							buttonLabel='Add Tracks'
							className='modal-lg'
							items={items}
							setItems={setItems}
							uploadedTracks={props.track.tracks}
						/>
						{/* <Input
						type='text'
						name='tracks'
						value={tracks}
						onChange={(e) => setItems(...tracks, e.target.value)}
					/> */}
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='artwork'>
							Artwork
						</Label>
						<Input
							type='text'
							name='artwork'
							value={artwork}
							onChange={(e) => setArtwork(e.target.value)}
						/>
					</FormGroup>
				</FormContainer>
			</Form>
			<Preview>
				<Image>{artwork ? <img src={artwork} /> : null}</Image>
				<Tracks>
					<h1>{name}</h1>
					<ul>{items ? items.map((item, index) => <li key={index}>{item.trackName}</li>) : null}</ul>
				</Tracks>
				<ButtonContainer>
					<Button className='btn-lg' style={{ margin: '20px' }} type='submit' onClick={onSubmit}>
						add item
					</Button>

					<Button className='btn-lg' style={{ margin: '20px' }} onClick={clearForm}>
						Clear Form
					</Button>
				</ButtonContainer>
			</Preview>
		</Container>
	);
};

UploadRelease.propTypes = {
	setAudioPlaing: PropTypes.func,
	setAudioPaused: PropTypes.func,
	getReleases: PropTypes.func,
	addRelease: PropTypes.func,
	playing: PropTypes.bool,
	tracks: PropTypes.object,
	release: PropTypes.object,
	getTracks: PropTypes.func
};

const mapStateToProps = (state) => ({ release: state.release, track: state.track });

export default connect(mapStateToProps, { addRelease, getReleases, getTracks })(UploadRelease);
