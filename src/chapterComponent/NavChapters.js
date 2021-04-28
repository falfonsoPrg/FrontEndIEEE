import React, {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavChapters extends Component
{
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
      }
    render()
    {
        return(
            <div>
                <ul class="nav nav-tabs">
                    <li className={this.getNavLinkClass("/Capitulos/Inicio/:chapter")}>
                        <NavLink to="/Capitulos/Inicio/:chapter">
                            <a className="nav-link" ><h6 style={{color: 'black'}}>Start</h6></a>
                        </NavLink>
                    </li>
                    <li className={this.getNavLinkClass("/Capitulos/Eventos/:chapter")}>
                        <NavLink to="/Capitulos/Eventos/:chapter">
                            <a className="nav-link"><h6 style={{color: 'black'}}>Events</h6></a>
                        </NavLink>
                    </li>
                    <li className={this.getNavLinkClass("/Capitulos/Logros/:chapter")}>
                        <NavLink to="/Capitulos/Logros/:chapter">
                            <a className="nav-link"><h6 style={{color: 'black'}}>Achievements</h6></a>
                        </NavLink>
                    </li>
                    <li className={this.getNavLinkClass("/Capitulos/Galeria/:chapter")}>
                        <NavLink to="/Capitulos/Galeria/:chapter">
                            <a className="nav-link" ><h6 style={{color: 'black'}}>Gallery</h6></a>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
NavChapters = withRouter(NavChapters);
export default NavChapters;
