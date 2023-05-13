import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Show() {
  const [dish, setDish] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/dishes/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  return (
    <div>

    </div>
  )
}
