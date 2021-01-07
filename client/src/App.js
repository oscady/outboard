import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Theme } from './Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Player from './components/Player/Player';
import { setAudioPlaying, setAudioPaused } from './actions/audioActions';
import { getTracks } from './actions/trackUploadActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackendHome from './components-back/Home/BackendHome';
import SingleMusicItemContainer from './pages/Music/SingleMusicItemContainer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Artists from './pages/Artists/Artists';
import Music from './pages/Music/Music';

function App(props) {
	const [ signedIn, setSignedIn ] = useState(true);
	const [ playing, setPlaying ] = useState(props.audio.playing);

	useEffect(() => {
		props.getTracks();
	}, []);
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<div className='App'>
				<Router>
					<Route path='/cms' render={(props) => <BackendHome />} />
					<NavBar signedIn={signedIn} setSignedIn={setSignedIn} />
					<Content playing={playing} animate={{ height: '100vh' }}>
						<Switch>
							<Route exact path='/' render={(props) => <Home />} />
							<Route path='/about' render={(props) => <About full={false} />} />
							<Route path='/user' render={(props) => <Login />} />
							<Route path='/artists' render={(props) => <Artists />} />
							<Route exact path='/music' render={(props) => <Music playing={playing} />} />
							<Route
								path='/music/:id'
								render={(props) => <SingleMusicItemContainer playing={playing} />}
							/>

							{/* <Route exact path='/artists/:id' render={(props) => <SingleArtist />} /> */}
						</Switch>
					</Content>
				</Router>
				{props.audio.playing ? <Player playing={playing} /> : null}
			</div>
		</ThemeProvider>
	);
}

App.propTypes = {
	setAudioPlaing: PropTypes.func,
	setAudioPaused: PropTypes.func,
	getTracks: PropTypes.func,
	playing: PropTypes.bool
};

const mapStateToProps = (state) => ({ audio: state.audio, track: state.track });

export default connect(mapStateToProps, { setAudioPlaying, setAudioPaused, getTracks })(App);
