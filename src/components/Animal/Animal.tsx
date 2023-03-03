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
        <h3>{props.animal.name}</h3>
        <p className="desc">
          <i>{props.animal.shortDescription}</i>
        </p>
        <button className="showButton" onClick={showMoreClick}>
          Visa
        </button>
      </div>
    </>
  );
};
