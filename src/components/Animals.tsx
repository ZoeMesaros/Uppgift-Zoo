import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/AnimalCard.scss";
import useRequest from "./useRequest";

const RenderAnimal = (animal: any, id: number) => (
  <section className="animalCard" key={animal.id}>
    <img className="profileImg" src={animal.imageUrl} alt={animal.name} />
    <p>{animal.name}</p>
    <p>
      Senast matad <span>{animal.lastFed}</span>
    </p>
    <p>
      <i>{animal.shortDescription}</i>
    </p>
    <button className="animaButton">
      <Link to={`/details/${animal.id}`}>Visa</Link>
    </button>
  </section>
);

const url = "https://animals.azurewebsites.net/api/animals";

const Animals = () => {
  const { data: animals, loading }: any = useRequest(url);

  if (loading) return <p>Laddar...</p>;

  return <div className="wrapper">{animals.map(RenderAnimal)}</div>;
};

export default Animals;
