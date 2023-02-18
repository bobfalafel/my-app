import React, { useState } from 'react';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';

//TODO ask for the user's business field to pick which one to show
function NavbarLogged(props: { logged: boolean }) {
    return (
        <ul id='nav-list'>
            <li>
                <a href="http://localhost:3001/">Homepage</a>
            </li>
            <li>
                <a href="http://localhost:3001/about">About</a>
            </li>
            {/* is logged user a business?
            if so: */}
            <li>
                <a href="http://localhost:3001/newcard">Create Card</a>
            </li>
            {/* end of last comment */}
            <li>
                <a href="http://localost:3001/">Log Out</a>
            </li>
        </ul>
    );
}

export default NavbarLogged;
