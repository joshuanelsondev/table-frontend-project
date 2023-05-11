import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dish({ dish }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

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
            <p>
              <span className="text-secondary font-bold">Calories: </span>
              {dish.calories}
            </p>
            <p>
              <span className="text-secondary font-bold">Portions: </span>
              {dish.portions}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleClick}
              className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-24"
            >
              View Image
            </button>
            <Link
              to={`/dishes/${dish.id}/edit`}
              className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-24 text-center"
            >
              Edit
            </Link>
          </div>
        </div>
      )}
      {!isFlipped && (
        <button
          onClick={handleClick}
          className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-fit absolute bottom-10"
        >
          View Details
        </button>
      )}
    </div>
  );
}