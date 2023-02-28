import { useParams } from "react-router-dom";

const AnimalDetails = () => {
  const { id } = useParams();

  return <p>Hej då! {id}</p>;
};

export default AnimalDetails;
