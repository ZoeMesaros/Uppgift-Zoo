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

/* import React, { useState } from "react";
import { useQuery } from "react-query";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/AnimalCard.scss";

const GetAnimals = async (setAnimals: any) => {
  const url = "https://animals.azurewebsites.net/api/animals";
  const { data } = await axios.get(url);
  setAnimals(data);
};

const RenderAnimal = (animal: any) => (
  <>
    <p>{animal.name}</p>
  </>
);

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    GetAnimals(setAnimals);
  }, []);

  return <>{animals.map(RenderAnimal)}</>;
};

function FetchAPI() {
  async function fetchAnimal() {
    const { data } = await axios.get(
      "https://animals.azurewebsites.net/api/animals"
    );
    return data;
  }
  const { data, error, isError, isLoading } = useQuery(
    "getAnimal",
    fetchAnimal
  );
  return (
    <main>
      <h1>Djurlista</h1>
      <div className="wrapper">
        {data &&
          data.length > 0 &&
          data.map((Animal: any, index: any) => (
            <section className="animalCard" key={Animal.id}>
              <img className="profileImg" src={Animal.imageUrl} alt="" />
              <p>
                {Animal.name} {Animal.isFed}
              </p>
              <p>
                Senast matad <span>{Animal.lastFed}</span>
              </p>
              <p>
                <i>{Animal.shortDescription}</i>
              </p>
            </section>
          ))}
      </div>
    </main>
  );
}
export default FetchAPI; */
