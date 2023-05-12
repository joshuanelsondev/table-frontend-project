import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

const API = process.env.REACT_APP_API_URL;

export default function Dish({ dish }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const deleteDish = () => {
    axios
      .delete(`${API}/dishes/${dish.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch ((error) => {
        console.log(error);
      })
  };

  return (
    <div
      className={`relative bg-primary flex justify-center items-center rounded-full h-[400px] w-[400px] `}
    >
      {!isFlipped && (
        <Link to={`${dish.image_url}`}>
          <img
            src={dish.image_url}
            alt={dish.name}
            className="h-[200px] w-auto rounded cursor-pointer hover:outline outline-4 outline-white"
          />
        </Link>
      )}

      {isFlipped && (
        <div className="absolute flex flex-col items-center gap-4">
          <h2 className="font-bold text-xl text-white">{dish.name}</h2>
          <div className="text-white font-semibold">
            <p>{dish.category}</p>
            {dish.is_vegan && (
              <p>Vegan</p>
            )}
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
            <button
              onClick={handleClick}
              className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-24 hover:bg-gray hover:text-white"
            >
              View Image
            </button>
            <Link
              to={`/dishes/${dish.id}/edit`}
              className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-24 text-center hover:bg-gray hover:text-white"
            >
              Edit
            </Link>
            <MdDeleteOutline onClick={deleteDish} className="text-secondary cursor-pointer hover:border-b-2 border-secondary" size={30} />
          </div>
        </div>
      )}
      {!isFlipped && (
        <button
          onClick={handleClick}
          className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-fit absolute bottom-10 hover:bg-gray hover:text-white"
        >
          View Details
        </button>
        
      )}
    </div>
  );
}