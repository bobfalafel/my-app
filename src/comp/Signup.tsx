import React, {useState} from 'react';
import axios from "axios";

function Signup (props: {logged:boolean}){
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const emailchange = (event:any)=>{
        setEmail(event.target.value);
    };
    const unamechange = (event:any)=>{
        setUsername(event.target.value);
    };
    const passchange = (event:any)=>{
        setPassword(event.target.value);
    };

    const updatedb= ()=>{
        const user = {mail:email,username:username,password:password};
        axios.get("http://localhost:3000/users/0")
        .then((response:any) => {
            console.log(response.data);
        })
        .catch((error:any)=>{
            console.log(error);
        })
        axios.post("http://localhost:3000/users",{email:email,username:username, password:password})
        .then((response:any) => {
            console.log(response.data);
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
                    <a href="http://localhost:3000/">Go Back</a>
                </div>
                :
                <div className='signup'>
                    <h1>Welcome to our <s>Cult</s> Site!</h1>
                    <div>
                        <h3>Enter your email for our lord Gtuhanai</h3>
                        <input type="text" id='su-email' value={email} onChange={emailchange} />
                        <h3>Oh and a username too</h3>
                        <input type="text" id="su-username" value={username} onChange={unamechange} />
                        <h3>And also a password</h3>
                        <input type="password" id='su-password' value={password} onChange={passchange} />
                        <br />
                        <button onClick={updatedb}>Awaken the dreamer!</button>
                    </div>
                </div>
            }
        </div>
    );
}
export default Signup;