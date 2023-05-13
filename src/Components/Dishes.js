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
        <div className="grid lg:grid-cols-3 py-8 md:grid-cols-2 sm:grid-cols-1 gap-y-8 w-full place-items-center ">
          {dishes.map((dish) => {
            return <Dish key={dish.id} dish={dish} />;
          })}
        </div>
      </div>
    );
}