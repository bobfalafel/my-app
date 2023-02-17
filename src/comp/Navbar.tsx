import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Signup from './Signup';

function Navbar(props: { logged: boolean }) {
    return (
        <ul id='nav-list'>
            <li>
                <a href="http://localhost:3001/">Homepage</a>
            </li>
            <li>
                <a href="http://localhost:3001/about">About</a>
            </li>
            <li>
                <a href="http://localhost:3001/signup">Sign Up</a>
            </li>
        </ul>
    );
}

export default Navbar;