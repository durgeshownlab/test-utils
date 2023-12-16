// import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function Navbar(props) {

    

    return (
        <>
            <nav className="navbar navbar-expand-lg " data-bs-theme={`${props.mode}`} style={props.mode==='light'?{backgroundColor: '#f8f9fa'}:{backgroundColor: '#071f48'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{ props.title }</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                        </li>
                       
                    </ul>
                    <div className="d-flex" role="search">
                        <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'}`} onClick={props.toggleMode}>
                            {/* <FontAwesomeIcon icon={faSun} /> */}
                            <FontAwesomeIcon icon={props.mode==='light'?faMoon:faSun} />
                        </button>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

Navbar.propTypes = {title: PropTypes.string.isRequired};

Navbar.defaultProps = {
    title: 'Navbar'
};
