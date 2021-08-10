import logo from './logo.svg';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import ContactsList from './contacts';
import AddContacts from './add-contacts';

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
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
  );
}

export default App;
