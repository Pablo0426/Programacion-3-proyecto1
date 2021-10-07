import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Home from './pages/Home';
import New_Job from './pages/New_Job';
import Auth from './pages/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/" exact component={New_Job}/>
       <Route path="/signin" exact component={Auth}/>
     </Switch>
    </Router>
  );
}

export default App;
