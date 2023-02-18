import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import Subusiness from './Subusiness';
import CreateCard from './CreateCard';

function NavbarRouter(props: { logged: boolean,setlog:any }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage logged={props.logged} />}></Route>
                <Route path='/about' element={<About logged={props.logged} />}></Route>
                <Route path='/signup' element={<Signup logged={props.logged} setlog={props.setlog} />}></Route>
                <Route path='/login' element={<Login logged={props.logged} setlog={props.setlog} />}></Route>
                <Route path='/business' element={<Subusiness logged={props.logged} setlog={props.setlog} />}></Route>
                <Route path='/newcard' element={<CreateCard logged={props.logged} setlog={props.setlog} />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default NavbarRouter;