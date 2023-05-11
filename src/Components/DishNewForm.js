import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DishNewForm() {

  const [selectedOption, setSelectedOption] = useState('');

  const [dishes, setDishes] = useState({
    name: '',
    calories: '',
    is_vegan: false,
    category: '',
    image_url: '',
    portions: '',
    url: ''
  });

  const handleTextChange = (event) => {
    setDishes({ ...dishes, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setDishes({ ...dishes, is_vegan: !dishes.is_vegan });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dishes.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Dish"
          required
        />

        <label htmlFor="calories">Calories:</label>
        <input
          id="calories"
          value={dishes.calories}
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
          checked={dishes.is_vegan}
        />


<label htmlFor="categories">Categories:</label>
        <select id="categories" value={selectedOption} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="Drinks">Drinks</option>
          <option value="Lunch">Lunch</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
        </select>
        <p>Selected option: {selectedOption}</p>


        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={dishes.url}
          placeholder="http://"
          onChange={handleTextChange}
        />

        <label htmlFor="portions">Portions:</label>
        <input
          id="portions"
          type="text"
          value={dishes.portions}
          placeholder="Number of portions"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}