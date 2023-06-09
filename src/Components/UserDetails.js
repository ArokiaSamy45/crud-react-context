import   React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";
import { cont } from "../App";
import { useContext } from "react";

export function UserDetails(){
    const {user} = useContext(cont);
    const {id} = useParams();
    const person = user[id];
    return (
        <BaseApp
        title = {"User details"}
        >
           <div className="user-content">
                <div  className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>
                    </div>
                </div>
        </BaseApp>
    )
}