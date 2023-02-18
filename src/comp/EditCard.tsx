import React, {useState,useEffect} from 'react';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import axios from "axios";

function EditCard(){

    useEffect(()=>{
        axios.get("http://localhost:3000/cards/"+changeId)
        .then((response:any)=>{
            cardDataBeforeEdit = response.data;
            console.log(cardDataBeforeEdit);
            setAddress(cardDataBeforeEdit.adress);
            setBdesc(cardDataBeforeEdit.desc);
            setBimg(cardDataBeforeEdit.imgurl);
            setBname(cardDataBeforeEdit.name);
            setBphone(cardDataBeforeEdit.phone);
        })
        .catch((error:any)=>{
            console.log(error);
        })
    },[])

    let temp = sessionStorage.getItem("loggedUser");
    if(temp == null){
        temp='';
    }
    const currentUser = JSON.parse(temp);

    let temp2 = sessionStorage.getItem("editId");
    if(temp2 == null){
        temp2='';
    }
    console.log(temp2)
    const changeId = JSON.parse(temp2);
    let cardDataBeforeEdit = {
        name: "",
        desc: "",
        adress: "",
        phone: "",
        imgurl: ""
    }

    
    

    const [bname,setBname] = useState(cardDataBeforeEdit.name);
    const [bdesc,setBdesc] = useState(cardDataBeforeEdit.desc);
    const [adress,setAddress] = useState(cardDataBeforeEdit.adress);
    const [bphone,setBphone] = useState(cardDataBeforeEdit.phone);
    const [bimg,setBimg] = useState(cardDataBeforeEdit.imgurl);

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

        axios.delete("http://localhost:3000/cards/"+changeId)
        .then((response:any)=>{
        })
        .catch((error:any)=>{
            console.log(error);
        })
        axios.post("http://localhost:3000/cards",{name:bname,desc:bdesc,adress:adress,phone:bphone,imgurl:bimg,ownerid:currentUser.id})
        .catch((error:any)=>
        {
            alert("There was a problem...\n"+error);
        })
        sessionStorage.removeItem("editId");
    }


    return(
        <div className='screen'>
            <div className='signup'>
                <h1>Welcome to our <s>Cult</s> Site!</h1>
                <div>
                    <h3>New business name plz</h3>
                    <input type="text" value={bname} onChange={bnameChange} />
                    <h3>New business description goes here:</h3>
                    <input type="text" value={bdesc} onChange={bdescChange} />
                    <h3>New business, where u @?</h3>
                    <input type="text" value={adress} onChange={adressChange} />
                    <h3>Can I get your NEW number?</h3>
                    <input type="text" value={bphone} onChange={bphoneChange} />
                    <h3>link ur NEW image tnx</h3>
                    <input type="text" value={bimg} onChange={bimgChange} />
                    <br />
                    <a href="http://localhost:3001/mycards"><button onClick={updatedb}>Awaken the dreamer!</button></a>
                </div>
            </div>
        </div>
    );
}
export default EditCard;