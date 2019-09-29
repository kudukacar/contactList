import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <header className="mainnav">
            <nav className="leftnav">
                <ul>
                    <li><Link to="/"> My Contacts </Link></li>
                </ul>
            </nav>
            <nav className="rightnav">
                <ul>
                    <li><Link to="/createcontact"><i className="fas fa-plus"></i></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;