// React Imports ---------------------------------------------------
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

// Material UI Imports ---------------------------------------------
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';

// Personal Imports ------------------------------------------------
import ContactsList from './contacts';
import AddContacts from './add-contacts';
import store from './store.js'; 

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <AppBar position="relative">
              <Toolbar>
              <h1><Link to="/"style={{textDecoration: 'none', color: 'white'}}>Contacts List</Link></h1>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path="/" component={ContactsList}/>
              <Route path="/add" component={AddContacts}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
