import React, {useState} from 'react';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import axios from "axios";

function CreateCard (props: {logged:boolean,setlog:any}){
    const [bname,setBname] = useState("");
    const [bdesc,setBdesc] = useState("");
    const [adress,setAddress] = useState("");
    const [bphone,setBphone] = useState("");
    const [bimg,setBimg] = useState("");

    const bnameChange = (event:any)=>{
        setBname(event.target.value);
    };
    const bdescChange = (event:any)=>{
        setBdesc(event.target.value);
    };
    const adressChange = (event:any)=>{
        setAddress(event.target.value);
    };
    const bphoneChange = (event:any)=>{
        setBphone(event.target.value);
    };
    const bimgChange = (event:any)=>{
        setBimg(event.target.value);
    };

    const updatedb= ()=>{
        axios.post("http://localhost:3000/cards",{name:bname,desc:bdesc,adress:adress,phone:bphone,imgurl:bimg,owner:0})//TODO add the owner as the currently logged business
        .catch((error:any)=>
        {
            alert("There was a problem...\n"+error);
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
                        <h3>Business name plz</h3>
                        <input type="text" value={bname} onChange={bnameChange} />
                        <h3>Business description goes here:</h3>
                        <input type="text" value={bdesc} onChange={bdescChange} />
                        <h3>Business, where u @?</h3>
                        <input type="password" value={adress} onChange={adressChange} />
                        <h3>Can I get your number?</h3>
                        <input type="text" value={bphone} onChange={bphoneChange} />
                        <h3>link ur image tnx</h3>
                        <input type="text" value={bimg} onChange={bimgChange} />
                        <br />
                        <button onClick={updatedb}>Awaken the dreamer!</button>
                    </div>
                </div>
            }
        </div>
    );
}
export default CreateCard;