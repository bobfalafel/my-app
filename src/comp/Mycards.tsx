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
    const sendEditInfo = (event:any)=>{
        let id = event.target.id;
        id = id.split("-")[1];
        sessionStorage.setItem("editId",id);
    }
    const deleteTicket = (event:any)=>{
        let id = event.target.id;
        id = id.split("-")[1];
        axios.delete(("http://localhost:3000/cards/"+id))
        .then((response:any)=>{
            window.location.reload();
        })
        .catch((error:any)=>{
            console.log(error);
        })
    }
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
                    <a onClick={sendEditInfo} href="http://localhost:3001/editcard"><img height={30} src="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-pencil-icon-png-image_1753753.jpg" alt="edit" id={"edit-"+ticket.id}/></a>
                    <img onClick={deleteTicket} height={30} src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" alt="delete" id={"delete-"+ticket.id}/>                    
                </div>
                //TODO add a way to edit/delete
            ))}
        </div>
    );
}

export default Mycards;