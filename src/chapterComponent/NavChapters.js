import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class NavChapters extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            id_chapter: props.id_chapter
        };
    }
    getNavLinkClass = (path) => {
        return "active"
      }
    render()
    {
        return(
            <div>
                <ul class="nav nav-tabs">
                    <li className={this.getNavLinkClass("/Capitulos/Inicio/")}>
                        <NavLink to={"/Capitulo/"+this.state.id_chapter+"/Inicio/"}>
                            <a className="nav-link" ><h6 style={{color: 'black'}}>Start</h6></a>
                        </NavLink>
                    </li>
                    <li className={this.getNavLinkClass("/Capitulos/Eventos/")}>
                        <NavLink to="/Capitulo/Eventos/">
                            <a className="nav-link"><h6 style={{color: 'black'}}>Events</h6></a>
                        </NavLink>
                    </li>
                    <li className={this.getNavLinkClass("/Capitulos/Logros/")}>
                        <NavLink to="/Capitulos/Logros/">
                            <a className="nav-link"><h6 style={{color: 'black'}}>Achievements</h6></a>
                        </NavLink>
                    </li>
                    <li className={this.getNavLinkClass("/Capitulos/Galeria/")}>
                        <NavLink to={"/Capitulo/"+this.state.id_chapter+"/Galeria/"}>
                            <a className="nav-link" ><h6 style={{color: 'black'}}>Gallery</h6></a>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
export default NavChapters;
