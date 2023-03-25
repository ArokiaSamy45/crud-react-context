import {React, useContext} from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import { cont } from "../App";




export default function MentorComponent(){
const history = useHistory();
const {user1, setUser1} = useContext(cont);

   
   const deleteUser = (idx)=>{
    const alterList = user1.filter((per)=>per.id !== idx);
     setUser1(alterList)
   }
  
    return (
        <BaseApp
        title= "Mentor Details">
          <div className="user-content">
             {user1.map((person, idx)=>(
                <div key ={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>

                    <div className="btn-group">

                        <button 
                        onClick={()=>history.push(`/mentorEdit/${person.id}`)}
                        className="btn edit-btn">
                          Edit</button>

                        <button 
                        className="btn view-btn"
                        onClick={()=>history.push(`/mentor/${idx}`)}
                        >View</button>

                        <button 
                        className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                        
                    </div>

                </div>
             ))}
          </div>
        </BaseApp>
    )
}