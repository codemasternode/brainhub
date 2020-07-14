import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RegisterNewPerson from './pages/RegisterNewPerson'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={RegisterNewPerson}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
