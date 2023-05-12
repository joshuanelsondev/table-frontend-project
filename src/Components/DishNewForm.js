import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function DishNewForm() {

  const [newDish, setNewDish] = useState({
    name: '',
    calories: '',
    is_vegan: false,
    category: '',
    image_url: '',
    portions: '',
  
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setNewDish({ ...newDish, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setNewDish({ ...newDish, is_vegan: !newDish.is_vegan });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/dishes`, newDish)
      .then(() => {
        navigate('/dishes');
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <div className="New bg-primary fil shadow-2xl shadow-black rounded-full min-w-[30em] min-h-[30em] md:h-[40em] md:w-[40em] flex items-center justify-center sm:h-[38em] sm:w-[38em] ">
      <form onSubmit={handleSubmit} className="flex flex-col text-white">
        <label className="font-bold text-xs mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="name"
          value={newDish.name}
          type="text"
          onChange={handleTextChange}
          required
        />

        <label className="font-bold text-xs mb-1" htmlFor="calories">
          Calories
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="calories"
          value={newDish.calories}
          type="number"
          onChange={handleTextChange}
          required
        />
        <div className="flex items-center gap-2 mb-4">
          <label className="font-bold text-xs" htmlFor="is_vegan">
            Vegan
          </label>
          <input
            type="checkbox"
            id="is_vegan"
            checked={newDish.is_vegan}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
        </div>
        <label className="font-bold text-xs mb-1" htmlFor="category">
          Category
        </label>
        <select
          className="rounded-lg h-6 w-50 mb-4 cursor-pointer focus:outline outline-[white] focus:bg-white text-primary font-bold text-sm pl-2"
          id="category"
          value={newDish.category}
          onChange={handleTextChange}
        >
          <option value="">Select...</option>
          <option value="Drinks">Drinks</option>
          <option value="Lunch">Lunch</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
          <option value="Dinner">Dinner</option>
          <option value="Other">Other</option>
        </select>

        <label className="font-bold text-xs mb-1" htmlFor="image_url">
          Image URL
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="image_url"
          type="text"
          required
          value={newDish.image_url}
          onChange={handleTextChange}
        />

        <label className="font-bold text-xs mb-1" htmlFor="portions">
          Portions
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="portions"
          type="number"
          value={newDish.portions}
          onChange={handleTextChange}
        />
        <br />
        <input
          type="submit"
          value="Save"
          className="bg-secondary rounded-3xl p-2 text-sm text-primary font-bold w-24 cursor-pointer hover:bg-gray hover:text-white"
        />
      </form>
    </div>
  );
}