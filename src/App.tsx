import React, { useState, lazy, Suspense, SetStateAction,useCallback,useEffect } from 'react';
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
  let islogtemp = false;
  if(sessionStorage.getItem("loggedUser") != null){
    islogtemp = true;
  }
  const [isLogged, setLog] = useState(islogtemp)
  //const [loggedUser, setUser] = useState(undefined)

  return (
    <div className="App">
      {isLogged?
      <NavbarLogged logged = {isLogged} setLog={setLog}/>
      :
      <Navbar logged={isLogged}></Navbar>
      }
      <NavbarRouter logged={isLogged} setlog={setLog}/>
    </div>
  );
}

export default App;
