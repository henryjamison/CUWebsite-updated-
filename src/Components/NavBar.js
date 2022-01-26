import React , {useEffect} from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import sigpi from '../sigpi.jpg';

const Navbar = () => {

      return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-mainbg">          
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <NavLink className="navbar-brand navbar-logo" to="/" exact>
                <img src= "https://sigmapi.org/wp-content/uploads/2018/12/logomark-1-1024x541.png" width="300" height="140"></img>
              </NavLink>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" style={{textAlign: "right"}}>
              <ul class="navbar-nav">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" exact>
                    About
                  </NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/alumini" exact>
                    Alumini
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/parents" exact>
                    Parents
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/rush" exact>
                    Rush/Events
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
  }
  
  export default Navbar;