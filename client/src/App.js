import { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Theme } from './Theme';
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Artists from './pages/Artists/Artists';

function App() {
	const [ signedIn, setSignedIn ] = useState(true);
	return (
		<ThemeProvider theme={Theme}>
			<Router>
				<Switch>
					<Fragment>
						<GlobalStyles />
						<div className='App'>
							<NavBar signedIn={signedIn} />
							<Content>
								<Route exact path='/' render={(props) => <Home />} />
								<Route exact path='/about' render={(props) => <About full={false} />} />
								<Route exact path='/user' render={(props) => <Login />} />
								<Route exact path='/artists' render={(props) => <Artists />} />
								{/* <Route exact path='/artists/:id' render={(props) => <SingleArtist />} /> */}
							</Content>
						</div>
					</Fragment>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
