import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        console.log("Hello")
        setShowMenu(!showMenu);
    }

  return (
    <>
        <nav className={classes.navbar}>
            <h2>UpdateKnowledge</h2>
            <ul className={showMenu ? `${classes.menu} ${classes['mobile-links']}` : classes.menu}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/jobs">Jobs</NavLink></li>
            </ul>
            <div className={classes["mobile-menu"]} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    </>
  )
}

export default Navbar