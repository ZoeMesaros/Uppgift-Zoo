import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/AnimalCard.scss";

const GetAnimals = async (setAnimals: any) => {
  const url = "https://animals.azurewebsites.net/api/animals/";
  const { data } = await axios.get(url);
  localStorage.setItem(url, JSON.stringify(data));
  setAnimals(data);
};

export const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    GetAnimals(setAnimals);
  }, []);

  return <div className="wrapper">{animals.map(RenderAnimal)}</div>;
};

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

export const AnimalDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    GetAnimals(setDetails);
  }, []);

  return <div>{details.map(RenderDetails)}</div>;
};

const RenderDetails = (details: any, id: number) => (
  <section className="animalCard" key={details.id}>
    <img className="profileImg" src={details.imageUrl} alt={details.name} />
  </section>
);
