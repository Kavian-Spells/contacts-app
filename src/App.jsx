import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

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
      <BrowserRouter>
        <div className="App">
          <header>
            <h1><Link to="/">Contacts List</Link></h1>
          </header>
          <Switch>
            <Route exact path="/" component={ContactsList}/>
            <Route path="/add" component={AddContacts}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
