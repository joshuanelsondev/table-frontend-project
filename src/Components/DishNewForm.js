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
    <div className="New bg-primary shadow-2xl shadow-black rounded-full h-[50em] w-[50em] flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={newDish.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Dish"
          required
        />

        <label htmlFor="calories">Calories:</label>
        <input
          id="calories"
          value={newDish.calories}
          type="text"
          onChange={handleTextChange}
          placeholder="Number of calories in dish"
          required
        />

        <label htmlFor="is_vegan">Is Vegan:</label>
        <input
          id="is_vegan"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={newDish.is_vegan}
        />

        <label htmlFor="categories">Categories:</label>
        <select id="category" value={newDish.category} onChange={handleTextChange}>
          <option value="">Select...</option>
          <option id="Drinks" value="Drinks">Drinks</option>
          <option id="Lunch" value="Lunch">Lunch</option>
          <option id="Breakfast" value="Breakfast">Breakfast</option>
          <option id="Snack" value="Snack">Snack</option>
          <option id="Dessert" value="Dessert">Dessert</option>
          <option id="Dinner" value="Dinner">Dinner</option>
        </select>
        <p>Selected option: {newDish.category}</p>

        <label htmlFor="url">Image URL:</label>
        <input
          id="image_url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={newDish.url}
          placeholder="http://"
          onChange={handleTextChange}
        />

        <label htmlFor="portions">Portions:</label>
        <input
          id="portions"
          type="text"
          value={newDish.portions}
          placeholder="Number of portions"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}