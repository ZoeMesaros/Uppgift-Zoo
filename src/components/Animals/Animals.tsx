import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../Animal/AnimalCard.scss"
import "./Animals.scss"
import { IAnimalSmall } from "../../models/IAnimalSmall";
import { getAnimals } from "../../services/animalService";
import { Animal } from "../Animal/Animal";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimalSmall[]>([]);

  useEffect(() => {
    const getData = async () => {
      let animals = await getAnimals();

      setAnimals(animals);
    };

    if (animals.length > 0) return;

    getData();
  });

  let animalsHtml = animals.map((animal) => {
    return (
      <Animal
        animal={animal}
        key={animal.id}
      ></Animal>
    );
  });

  return <div className="wrapper">{animalsHtml}</div>;
};
