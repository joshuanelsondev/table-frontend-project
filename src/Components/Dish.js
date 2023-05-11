import { useState } from "react";

export default function Dish({ dish }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      className={`relative bg-primary flex justify-center items-center rounded-full h-[400px] w-[400px] ${
        isFlipped ? "transform rotate-y-180" : ""
      }`}
    >
      {!isFlipped && (
        <img
          src={dish.image_url}
          alt={dish.name}
          className="absolute h-[200px] w-auto rounded cursor-pointer hover:outline outline-4 outline-white"
          onClick={handleClick}
        />
      )}

      {isFlipped && (
        <div className="absolute flex flex-col items-center gap-8">
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
          <button onClick={handleClick} className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold">View Image</button>
        </div>
      )}
    </div>
  );
}