import React, { useState, lazy, Suspense } from 'react';
import './App.css';
const Homepage = lazy(() => import("./comp/Homepage"));
const About = lazy(() => import("./comp/About"));


function App() {

  const [isLogged, setLog] = useState(false)
  //const [loggedUser, setUser] = useState(undefined)

  return (
    <div className="App">
      <button onClick={() => { setLog(!isLogged) }}>change</button>
      <Suspense>
        <About logged={isLogged}/>
      </Suspense>
      <Suspense>
        <Homepage logged={isLogged} />
      </Suspense>
    </div>
  );
}

export default App;
