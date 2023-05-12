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
      })
      .catch((e)=>{
        console.log(e)
      })

  },[id])
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios
  //       .get(`${API}/dishes/${id}`)
  //       .then((response)=>{
  //         console.log(response.data)
  //         setEditDish(response.data);
  //       })
       
  //     } catch (error) {
  //       navigate(`/not-found`);
  //     }
  //   };
  //   fetchData();
  // }, [id, navigate]);

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
      .then(() => {
        navigate(`/dishes/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDish();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={editDish.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Dish"
          required
        />

        <label htmlFor="calories">Calories:</label>
        <input
          id="calories"
          value={editDish.calories}
          type="number"
          onChange={handleTextChange}
          placeholder="Number of calories in dish"
          required
        />

        <label htmlFor="is_vegan">Is Vegan:</label>
        <input
          type="checkbox"
          id="is_vegan"
          checked={editDish.is_vegan}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="category">Category:</label>
        <select
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
        </select>

        <label htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          type="text"
          required
          value={editDish.image_url}
          placeholder="Enter dish image URL"
          onChange={handleTextChange}
        />

        <label htmlFor="portions">Portions:</label>
        <input
          id="portions"
          type="number"
          value={editDish.portions}
          placeholder="Number of portions"
          onChange={handleTextChange}
        />

        <input type="submit" value="Submit" />
      </form>

      <div>
        <Link to={`/dishes/${id}`}>
          <button>Nevermind!</button>
        </Link>
      </div>
    </div>
  );
}