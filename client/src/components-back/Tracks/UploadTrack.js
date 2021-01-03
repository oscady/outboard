import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Styled from 'styled-components';
import { addTrack, getTracks } from '../../actions/trackUploadActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  height: 100%
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 100px;
`;

export class UploadTrack extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null,
			artistName: '',
			modal: false,
			trackName: '',
			url: '',
			artwork: ''
		};
	}

	componentDidMount() {
		this.clearForm();
	}

	selectItem = (item) => {
		this.setState({
			id: item._id,
			artistName: item.artistName,
			trackName: item.trackName,
			url: item.url,
			artwork: item.artwork
		});
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	// clear form function actioned when clear form button selected and on form
	// submit
	clearForm = () => {
		this.setState({
			id: null,
			artistName: '',
			trackName: '',
			artwork: '',
			url: ''
		});
	};

	onChange = (e) => {
		switch (e.target.name) {
			// case 'favourite':
			// 	this.setState({
			// 		favourite: !this.state.favourite // flip boolean value
			// 	});
			// 	break;
			default:
				this.setState({
					[e.target.name]: e.target.value
				});
		}
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { artistName, trackName, url, artwork } = this.state;

		// this.composeGalleryArray(gallery);
		// const galleryLen = gallery.length;

		let formData = new FormData();

		formData.append('artistName', artistName);
		formData.append('trackName', trackName);
		formData.append('url', url);
		formData.append('artwork', artwork);

		// for (var y = 0; y < galleryLen; y++) {
		//   formData.append("gallery[]", gallery[y]);
		// }

		// close modal.
		this.toggle();

		this.props.addTrack(formData);

		this.clearForm();
	};

	render() {
		const { artistName, trackName, url, artwork } = this.state;
		return (
			<Form onSubmit={this.onSubmit} action='/cms' style={{ height: '100%', width: '100%' }}>
				<FormContainer>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='artistName'>
							Artist Name
						</Label>
						<Input type='text' name='artistName' value={artistName} onChange={this.onChange} />
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='trackName'>
							Track Name
						</Label>
						<Input type='text' name='trackName' value={trackName} onChange={this.onChange} />
					</FormGroup>
					<FormGroup>
						<Label
							style={{
								padding: '5px',
								fontSize: '2rem',
								textAlign: 'left',
								color: 'white'
							}}
							htmlFor='url'>
							url
						</Label>
						<Input type='text' name='url' value={url} onChange={this.onChange} />
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
						<Input type='text' name='artwork' value={artwork} onChange={this.onChange} />
					</FormGroup>
				</FormContainer>

				<ButtonContainer>
					<Button className='btn-lg' style={{ margin: '20px' }} type='submit'>
						add item
					</Button>

					<Button className='btn-lg' style={{ margin: '20px' }} onClick={this.clearForm}>
						Clear Form
					</Button>
				</ButtonContainer>
			</Form>
		);
	}
}

UploadTrack.propTypes = {
	setAudioPlaing: PropTypes.func,
	setAudioPaused: PropTypes.func,
	getTracks: PropTypes.func,
	addTrack: PropTypes.func,
	playing: PropTypes.bool
};

const mapStateToProps = (state) => ({ audio: state.audio });

export default connect(mapStateToProps, { addTrack, getTracks })(UploadTrack);
