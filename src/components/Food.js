import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../pages/Recipe";

export default function Food() {
  const param = useParams();
  const [clickedRecipe, setClickedRecipe] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b30ae0cc44msha2b227bc9c54b11p1fcda2jsn592e21d314ac",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    fetch(
      "https://tasty.p.rapidapi.com/recipes/get-more-info?id=" + param.id,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setClickedRecipe({ ...response });
      })
      .catch((err) => console.error(err));
  }, [param.id]);
  return (
    <>
      {clickedRecipe !== {} && clickedRecipe.is_shoppable && (
        <Recipe items={clickedRecipe} />
      )}
    </>
  );
}
