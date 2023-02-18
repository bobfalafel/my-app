import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import axios from "axios";
import { object } from 'yup';

function AllCards(props: { logged: boolean }) {
    let temp = sessionStorage.getItem("loggedUser");
    let [templist, setTemplist] = useState<any[]>([]); // Define state for templist
    if(temp == null){
        temp='';
    }
    const currentUser = JSON.parse(temp);

    useEffect(() => {
        // Fetch data from API and update templist state
        axios.get("http://localhost:3000/cards")
            .then((response:any)=>{
                setTemplist(response.data);
                console.log(templist);
            })
            .catch((error:any)=>{
                console.log(error);
            });
    }, [currentUser.id]); // Run effect only when currentUser.id changes

    return (
        <div className="card-deck">
            {templist.map((ticket) => (
                <div className='card' key={ticket.id}>
                    {ticket.name}
                    <br />
                    {ticket.desc}
                    <br />
                    {ticket.adress}
                    <br />
                    {ticket.phone}
                    <br />
                    <img height={100} src={ticket.imgurl} alt="Error Loading Image" />
                </div>
            ))}
        </div>
    );
}

export default AllCards;