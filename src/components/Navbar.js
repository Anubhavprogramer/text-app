import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.tittle}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            // data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Textform">
                  {props.home}
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact me 
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Linkdin
                    </a>
                  </li>
                  
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.Togglemode} 
              />
              <label className={`form-check-label mx-3 text-${props.mode==='light'?'Dark':'light'}`} htmlFor="flexSwitchCheckDefault">
              {props.mode==='light'?'Dark':'light'} Mode
              </label>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  home: PropTypes.string,
};

Navbar.defaultProps = {
  tittle: "janshi aur anubhav",
  home: "janshi aur anubhav",
};
