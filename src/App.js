import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainComponent from './MainComponent';
import ChapterArea from './ChapterArea';
import NavBar from './Components/NavBar'
import NewNavbar from './Components/NewNavbar'
import RecoverPassword from './Components/RecoverPassword';
import ContactUs from './Components/ContactUs';
import Inicio from './chapterComponent/Inicio';
import Login from './chapterComponent/login'




function App ()
{
    return(
      <Router>
        <div className="App">
          <NewNavbar></NewNavbar>
        </div>
      </Router>
    );
  
}
export default App;