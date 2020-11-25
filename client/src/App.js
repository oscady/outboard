import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from './GlobalStyles'
import { Theme } from './Theme'
import { BrowserRouter as Router, Route, Switch, NavLink, withRouter, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import FullPageComponent from './components/FullPageComponent/FullPageComponent'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <>
          <GlobalStyles />
          <div className="App">
            <NavBar signedIn={false}/>
            <FullPageComponent>hello</FullPageComponent>
          </div>
          </>
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
