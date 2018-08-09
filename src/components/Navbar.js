import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/contact'} className="nav-link">Tickets and Tours</Link></li>
                </ul>
            </nav>
            <hr />
        </div>
    )
}

export default Navbar;