import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const HotelData = () => {
  const [items, setItems] = useState([]);
  const url =
    "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(url);
        const { data } = response;
        setItems(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);
  return (
    <div>
      {items.map((item) => {
        const { id, name, prize, url } = item;
        return(
            <div key={id}>
         <h2>{name}</h2>
         <p> {prize}</p>
          <img className="size" src={url}></img>
         </div>
         
         );
      })}
    </div>
  );
};

export default HotelData;
