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

function Mycards(props: { logged: boolean }) {
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
                const filteredData = response.data.filter((ticket:any)=>{
                    return ticket.ownerid == currentUser.id;
                });
                setTemplist(filteredData);
            })
            .catch((error:any)=>{
                console.log(error);
            });
    }, [currentUser.id]); // Run effect only when currentUser.id changes

    return (
        <div className="card-deck">
            {templist.map((ticket) => (
                <div key={ticket.id}>
                    {ticket.name}
                </div>
            ))}
        </div>
    );
}

export default Mycards;