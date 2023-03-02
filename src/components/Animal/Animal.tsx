import { useNavigate } from "react-router-dom";
import { IAnimalSmall } from "../../models/IAnimalSmall";
import "../Animal/AnimalCard.scss";

interface IAnimalProps {
  animal: IAnimalSmall;
}

export const Animal = (props: IAnimalProps) => {
  const navigate = useNavigate();

  const showMoreClick = () => {
    navigate(`/animal/${props.animal.id}`);
  };

  return (
    <>
      <div className="animalCard">
        <img
          className="profileImg"
          src={props.animal.imageUrl}
          alt={props.animal.name}
        />
        <p>{props.animal.name}</p>
        <p>
          Senast matad <span>{props.animal.lastFed}</span>
        </p>
        <p>
          <i>{props.animal.shortDescription}</i>
        </p>
        <button onClick={showMoreClick}>Visa</button>
      </div>
    </>
  );
};
