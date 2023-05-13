import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <div className="h-full w-full">
        {!dishes.length && (
          <div className="h-full w-full flex justify-center items-center">
            <Link to={'/dishes/new'} className="bg-primary text-white font-bold p-4 rounded-full cursor-pointer hover:bg-gray hover:text-primary">Add a Plate</Link>
          </div>
        )}
        <div className="grid lg:grid-cols-3 py-8 md:grid-cols-2 sm:grid-cols-1 gap-y-8 w-full place-items-center ">
          {dishes.map((dish) => {
            return <Dish key={dish.id} dish={dish} />;
          })}
        </div>
      </div>
    );
}