import { useState, useEffect } from "react";
import axios from "axios";
import Dish from "./Dish";

const API = process.env.REACT_APP_API_URL;

export default function Dishes() {
   const [dishes, setDishes] = useState([]);

   useEffect(() => {
        axios.get(`${API}/dishes`)
         .then((res) => {
            setDishes(res.data.dishes);
         })
         .catch((error) => {
            console.log("error:", error)
         });
   }, []);

    return (
        <div className="">
            <h1 className="text-3xl text-primary font-semibold m-8">My Table</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 mt-8 w-full place-items-center sm:grid-cols-1"> 
                {dishes.map((dish) => {
                    return(
                    <Dish key={dish.id} dish={dish} />
                    )
                })}
            </div>
        </div>
    )
}