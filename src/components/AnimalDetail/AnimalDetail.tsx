import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalSmall } from "../../models/IAnimalSmall";
import { getAnimalById } from "../../services/animalService";
import "./AnimalDetail.scss"

export const AnimalDetails = () => {
  const [animal, setAnimal] = useState<IAnimal>();
  const [error, setError] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        let response = await getAnimalById(+id);

        if (response.animal) {
          setAnimal(response.animal);
        } else {
          setError(response.error);
        }
      }
    };

    if (animal) return;

    getData();
  });

  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    setDisabled(true);
  }

  return (
    <>
      {error !== "" ? (
        <>
          <h2>{error}</h2>
        </>
      ) : (
        <>
        <section className="animalDetail">
        <div className="wrapper">
          <img src={animal?.imageUrl} alt={animal?.name} />{" "}
          <section className="animalInfo">
          <h1 className="name">{animal?.name}</h1>
          <i>{animal?.latinName}</i>
           <h3 className="desc">{animal?.longDescription}</h3>
           <br />
           <h3>{animal?.name} blev senast matad</h3>
           <h4>{animal?.lastFed}</h4>
           <button disabled={disabled} onClick={onClick}>Mata</button>
           </section>
          </div>
          </section>
        </>
      )}
    </>
  );
};
