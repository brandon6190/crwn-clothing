import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const Hatspage = () => (
  <div>Hats Page</div>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
