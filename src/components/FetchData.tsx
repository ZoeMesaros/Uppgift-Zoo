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

export default Animals;

/* function FetchAPI() {
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

export default FetchAPI;
 */
