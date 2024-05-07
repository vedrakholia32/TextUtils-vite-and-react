import React from 'react';
import PropTypes from 'prop-types';



const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>


            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
            </div>

        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};


export default Navbar;
