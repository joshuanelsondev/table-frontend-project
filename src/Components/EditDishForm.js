import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditNewDish() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editDish, setEditDish] = useState({
    name: "",
    calories: 0,
    is_vegan: false,
    category: "",
    image_url: "",
    portions: 0
   
  });

  useEffect(() => {
      axios
      .get(`${API}/dishes/${id}`)
      .then((response)=>{
          console.log(response.data)
        setEditDish(response.data)
        console.log(response.data[0])
      })
      .catch((e)=>{
        console.log(e)
      })

  },[id])
  

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setEditDish((prevEditDish) => ({
      ...prevEditDish,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setEditDish((prevEditDish) => ({
      ...prevEditDish,
      is_vegan: event.target.checked,
    }));
  };

  const updateDish = () => {
    axios
      .put(`${API}/dishes/${id}`, editDish)
      .then((response) => {
        setEditDish(response.data)
        navigate(`/dishes`);
      })
      .catch((error) => {
         console.log(error);
      });
  };

  // updateDish()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDish();
  };

  return (
    <div className="Edit bg-primary shadow-2xl shadow-black rounded-full min-w-[30em] min-h-[30em] md:h-[40em] md:w-[40em] flex items-center justify-center sm:h-[38em] sm:w-[38em]">
      <form onSubmit={handleSubmit} className="flex flex-col text-white">
        <label htmlFor="name" className="font-bold text-xs mb-1">
          Name
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="name"
          value={editDish.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Dish"
          required
        />

        <label className="font-bold text-xs mb-1" htmlFor="calories">
          Calories
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="calories"
          value={editDish.calories}
          type="number"
          onChange={handleTextChange}
          placeholder="Number of calories in dish"
          required
        />
        <div className="flex items-center gap-2 mb-4">
          <label className="font-bold text-xs" htmlFor="is_vegan">
            Vegan
          </label>
          <input
            type="checkbox"
            id="is_vegan"
            checked={editDish.is_vegan}
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
          value={editDish.category}
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
          value={editDish.image_url}
          placeholder="Enter dish image URL"
          onChange={handleTextChange}
        />

        <label className="font-bold text-xs mb-1" htmlFor="portions">
          Portions
        </label>
        <input
          className="rounded-lg h-6 w-50 mb-4 focus:outline outline-[white] text-black text-sm pl-2"
          id="portions"
          type="number"
          value={editDish.portions}
          placeholder="Number of portions"
          onChange={handleTextChange}
        />

        <input
          type="submit"
          value="Save"
          className="bg-secondary rounded-3xl p-2 mt-4 text-sm text-primary font-bold w-24 cursor-pointer hover:bg-gray hover:text-white"
        />
      </form>
    </div>
  );
}