import { useState, useEffect } from "react";
import axios from "axios";
import Dish from "./Dish";

const API = process.env.REACT_APP_API_URL;

export default function Dishes() {
   const [dishes, setDishes] = useState([]);

   useEffect(() => {
        axios.get(`${API}/dishes`)
         .then((res) => {
            console.log(res.data);
            setDishes(res.data.dishes);
         })
         .catch((error) => {
            console.log("error:", error)
         });
   }, []);

    return (
        <div className="">
            <div className="grid grid-cols-2 gap-8 m-8 w-full place-items-center"> 
                {dishes.map((dish) => {
                    return(
                    <Dish key={dish.id} dish={dish} />
                    )
                })}
            </div>
        </div>
    )
}