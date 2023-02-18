import React, {useState} from 'react';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import axios from "axios";

function Login (props: {logged:boolean,setlog:any}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const emailchange = (event:any)=>{
        setEmail(event.target.value);
    };
    const passchange = (event:any)=>{
        setPassword(event.target.value);
    };

    const checkdb= ()=>{
        const user = {mail:email,password:password};
        console.log(user);
        let isMatch = false;
        axios.get("http://localhost:3000/users")
        .then((response:any) => {
            for(let i=0;i<response.data.length;i++)
            {
                if(response.data[i].email === user.mail && response.data[i].password===user.password)
                {
                    alert("Welcome back "+response.data[i].username);
                    console.log("HERE");
                    isMatch = true;
                    break;
                    
                }
            }
            if(isMatch){
                props.setlog(true);
            }
            else{
                alert("Incorrect Email/Password");
            }
        })
        
        .catch((error:any)=>{
            console.log(error);
        })
    }


    return(
        <div className='screen'>
            {props.logged ?
                <div className='alreadyLogged'>
                    <h1>You are already logged in.</h1>
                    <a href="http://localhost:3001/">Go Back</a>
                    {/* <Link to={'/?logged=${props.logged}'}>go there</Link> */}
                </div>
                :
                <div className='signin'>
                    <h3>Gib Email</h3>
                    <input type="text" id='su-email' value={email} onChange={emailchange} />
                    <h3>Gib Password</h3>
                    <input type="password" id='su-password' value={password} onChange={passchange} />
                    <br />
                    <button onClick={checkdb}>Awaken the dreamer!</button>
                    <br />
                    New to our site?
                    <a href="https://localhost:3001/signup">Sign Up!</a>
                </div>
            }
        </div>
    );
}
export default Login;