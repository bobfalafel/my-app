import React, {useState} from 'react';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import axios from "axios";

function Subusiness (props: {logged:boolean,setlog:any}){
    const [email,setEmail] = useState("");
    const [businessname,setbusinessname] = useState("");
    const [password,setPassword] = useState("");

    const emailchange = (event:any)=>{
        setEmail(event.target.value);
    };
    const unamechange = (event:any)=>{
        setbusinessname(event.target.value);
    };
    const passchange = (event:any)=>{
        setPassword(event.target.value);
    };

    const updatedb= ()=>{
        const business = {mail:email,businessname:businessname,password:password, cardid:[""]};
        console.log(business);
        let isFree = true;
        axios.get("http://localhost:3000/users")
        .then((response:any) => {
            for(let i=0;i<response.data.length;i++)
            {
                if(response.data[i].email === business.mail)
                {
                    console.log("HERE");
                    isFree = false;
                    break;
                    
                }
            }
            if(isFree && business.mail !== "" && business.password !== "" && business.businessname !==""){
                axios.post("http://localhost:3000/users",{business:true,email:email,name:businessname, password:password})
                .then((response:any) => {
                    console.log(response.data);
                    alert("Sign up successful");
                    props.setlog(true);
                    sessionStorage.setItem("loggedUser",JSON.stringify(response.data));
                })
                .catch((error:any)=>{
                    alert("Oops there seems to be some problem with that...\n"+error);
                })
            }
            else{
                alert("Oops there seems to be some problem with that...\nthere is already a business with that Email");//TODO specific alerts
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
                <div className='signup'>
                    <h1>Welcome to our <s>Cult</s> Site!</h1>
                   <div>
                        <h3>Blessed be thy <b>EMAIL</b></h3>
                        <input type="text" id='su-email' value={email} onChange={emailchange} />
                        <h3>Fortune smiles upon your <b>businessNAME</b></h3>
                        <input type="text" id="su-businessname" value={businessname} onChange={unamechange} />
                        <h3>God have mercy on your <b>PASSWORD</b></h3>
                        <input type="password" id='su-password' value={password} onChange={passchange} />
                        <br />
                        <button onClick={updatedb}>Awaken the dreamer!</button>
                    </div>
                </div>
            }
        </div>
    );
}
export default Subusiness;