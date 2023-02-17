import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Signup from './Signup';

function NavbarRouter(props: { logged: boolean }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage logged={props.logged} />}></Route>
                <Route path='/about' element={<About logged={props.logged} />}></Route>
                <Route path='/signup' element={<Signup logged={props.logged} />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default NavbarRouter;