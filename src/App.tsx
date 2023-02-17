import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Homepage from './comp/Homepage';
import About from './comp/About';
import NavbarRouter from './comp/NavbarRouter';
import Navbar from './comp/Navbar';
import NavbarLogged from './comp/NavbarLogged';


function App() {

  const [isLogged, setLog] = useState(false)
  //const [loggedUser, setUser] = useState(undefined)

  return (
    <div className="App">
      <button onClick={() => { setLog(!isLogged) }}>change</button>
      {isLogged?
      <NavbarLogged logged = {isLogged}/>
      :
      <Navbar logged={isLogged}></Navbar>
      }
      <NavbarRouter logged={isLogged}/>
    </div>
  );
}

export default App;
