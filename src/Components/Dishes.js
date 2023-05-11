import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Dishes() {
   const [dishes, setDishes] = useState([]);

   useEffect(() => {
        axios.get(`${API}/dishes`)
         .then((res) => {
            console.log(res.data);
            setDishes(res.data);
         })
         .catch((error) => {
            console.log("error:", error)
         });
   }, []);
    
    return (
        
        <div> 
            hello
            {dishes.map(dish => {
                return(
                   <div></div>
                )
            })}
        </div>
    )
}