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

function NavbarLogged(props: { logged: boolean, setLog:any }) {

    const logout = ()=>{
        sessionStorage.removeItem("loggedUser");
        props.setLog(false);
    }
    let temp = sessionStorage.getItem("loggedUser")
    if(temp == null)
    {
        temp = "";
    }
    let isBusiness = JSON.parse(temp).business;

    return (
        <ul id='nav-list'>
            <li>
                <a href="http://localhost:3001/">Homepage</a>
            </li>
            <li>
                <a href="http://localhost:3001/about">About</a>
            </li>
            {isBusiness?
            <li>
                <a href="http://localhost:3001/newcard">Create Card</a>
            </li>
            :
            null
            }
            {isBusiness?
            <li>
                <a href="http://localhost:3001/mycards">My Cards</a>
            </li>
            :
            null
            }
            <li>
                <a href="http://localhost:3001/allcards">All Cards</a>
            </li>
            <li>
                <a onClick={logout} href="http://localhost:3001/">Log Out</a>
            </li> 
        </ul>
    );
}

export default NavbarLogged;
