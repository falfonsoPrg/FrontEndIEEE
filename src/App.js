import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/NavBar'
import Inicio from './chapterComponent/Inicio';
import Login from './chapterComponent/login'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainComponent from './MainComponent';
import ChapterArea from './ChapterArea';
import RecoverPassword from './Components/RecoverPassword';


function App ()
{
    return(
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Switch>

            <Route path="/Capitulos/:id_chapter" component={ChapterArea}/>
            <Route path="/Login" component={Login}/>
           <Route path="/RecoverPassword" component={RecoverPassword}/>
            <Route exact path="/" component={MainComponent}/>
        
          </Switch> 
        </div>
      </Router>
    );
  
}
export default App;