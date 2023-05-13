import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

const API = process.env.REACT_APP_API_URL;


export default function DishDetails() {
  const [dish, setDish] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/dishes/${id}`)
      .then((res) => {
        setDish(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const deleteDish = () => {
    axios
      .delete(`${API}/dishes/${dish.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`relative bg-primary flex justify-center items-center rounded-full mt-10 md:h-[40em] md:w-[40em] sm:h-[30em] sm:w-[30em] shadow-2xl shadow-black `}
    >
      <div className="absolute flex flex-col items-center gap-4">
        <h2 className="font-bold text-xl text-white flex items-center gap-1">
          {dish.name}
        </h2>
        <div className="text-white font-semibold">
          <p>{dish.category}</p>
          {dish.is_vegan && <p>Vegan</p>}
          <p>
            <span className="text-secondary font-bold">Calories: </span>
            {dish.calories}
          </p>
          <p>
            <span className="text-secondary font-bold">Portions: </span>
            {dish.portions}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Link
            to={`/dishes/${dish.id}/edit`}
            className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-24 text-center hover:bg-gray hover:text-white"
          >
            Edit
          </Link>
          <MdDeleteOutline
            onClick={deleteDish}
            className="text-secondary cursor-pointer hover:border-b-2 border-secondary"
            size={30}
          />
        </div>
      </div>
    </div>
  );
}
