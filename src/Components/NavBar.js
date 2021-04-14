import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const axios = require("axios");

class NavBar extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      chapters: [{id_chapter:1, name_chapter:"A"}]
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_ENDPOINT+'/api/Chapters/',{
      headers: {
          'auth-token': localStorage.getItem('token'),
      }
  })
    .then(
      (res) => {
        //this.setState({chapters: res.data})
      }
    ).catch( (err) => {
      console.log(err)
    }
    )  }
  logout=()=>{
    localStorage.removeItem('usuario')
    localStorage.removeItem('token')
  }

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  
  render()
  {
    const state = localStorage.getItem('usuario')
    return(
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: "#0A1B2A"}}>
      <a className="navbar-brand" href="#">
      <img src="/images/Logos/LOGOS_OFICIALES/Rama_IEEE.png" width="130" height="60" class="d-inline-block align-top" alt="" loading="lazy"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className={this.getNavLinkClass("/")}>
            <NavLink to="/">
              <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
            </NavLink>
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Capítulos
        </a>
        <div className="dropdown-menu "aria-labelledby="navbarDropdown">
            {this.state.chapters.length == 0 ? 
              '':
            this.state.chapters.map((chapter, i) => <div key={i}>
            <NavLink to={`Capitulos/${chapter.id_chapter}`}>
                <a className="dropdown-item" href="#">{chapter.name_chapter}</a>
              </NavLink>
              <div className="dropdown-divider"></div>
              </div>)
            }
          </div>
      </li>
          <li className="nav-item">
            <a className="nav-link" href="/ContactUs">Contactanos</a>
          </li> 
        </ul>
            {
             state !=undefined? 
             <div>
             <span className={this.getNavLinkClass("/Login")}>
             <NavLink to="/Profile">
               <a class="nav-link" href="#" style={{color: 'white'}}>{JSON.parse(state).firstname}</a>
             </NavLink>
             
             </span> 
             <span className={this.getNavLinkClass("/Login")}>
             <NavLink to="/">
               <a class="nav-link" href="/" onClick={this.logout} style={{color: 'white'}}>Cerrar Sesión</a>
             </NavLink>
             </span>
             </div>
             :
             <span className={this.getNavLinkClass("/Login")}>
             <NavLink to="/Login">
               <a class="nav-link" href="#" style={{color: 'white'}}>Login</a>
             </NavLink>
             </span>
              
            }
            
      </div>
    </nav>
    );
  }
}
NavBar = withRouter(NavBar);
export default NavBar;