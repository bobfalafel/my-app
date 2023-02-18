import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Homepage from './comp/Homepage';
import About from './comp/About';
import Signup from './comp/Signup';
import NavbarRouter from './comp/NavbarRouter';
import Navbar from './comp/Navbar';
import NavbarLogged from './comp/NavbarLogged';
import CreateCard from './comp/CreateCard';
import {
  BrowserRouter,
  useParams,
  Routes,
  Link,
} from 'react-router-dom';


function App() {

  const [isLogged, setLog] = useState(false)
  //const [loggedUser, setUser] = useState(undefined)

  return (
    <div className="App">
      <button onClick={() => { setLog(!isLogged) }}>change</button>
      {isLogged?
      <NavbarLogged logged = {isLogged}/>//TODO add the logged user as param to pick navbar
      :
      <Navbar logged={isLogged}></Navbar>
      }
      <NavbarRouter logged={isLogged} setlog={setLog}/>
    </div>
  );
}

export default App;
