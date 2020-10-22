import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to='/'>Login</Link>
        //         </li>
        //         <li>
        //             <Link to='/home'>Home</Link>
        //         </li>
        //         <li>
        //             <Link to='/about'>About</Link>
        //         </li>
        //     </ul>
        // </nav>
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
            <Link className='navbar-brand' to='/'>
                UseContext
            </Link>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <NavLink exact activeClassName='active' className='nav-item nav-link' to='/'>
                        Home
                    </NavLink>
                    <NavLink exact activeClassName='active' className='nav-item nav-link' to='/login'>
                        Login
                    </NavLink>
                    <NavLink exact activeClassName='active' className='nav-item nav-link' to='/about'>
                        About
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};
