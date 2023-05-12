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
    <div className="New">
      <form onSubmit={handleSubmit}>
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
          type="number"
          onChange={handleTextChange}
          placeholder="Number of calories in dish"
          required
        />

        <label htmlFor="is_vegan">Is Vegan:</label>
        <input
          type="checkbox"
          id="is_vegan"
          checked={newDish.is_vegan}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="category">Category:</label>
        <select
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
        </select>

        <label htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          type="text"
          required
          value={newDish.image_url}
          placeholder="Enter dish image URL"
          onChange={handleTextChange}
        />

        <label htmlFor="portions">Portions:</label>
        <input
          id="portions"
          type="number"
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