import { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { Theme } from './Theme';
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';

import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<Router>
				<Switch>
					<Fragment>
						<GlobalStyles />
						<div className='App'>
							<NavBar signedIn={false} />
							<Content>
								<Route exact path='/home' render={(props) => <Home />} />
								<Route exact path='/about' render={(props) => <About />} />
							</Content>
						</div>
					</Fragment>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
