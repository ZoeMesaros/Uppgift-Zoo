import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { IAnimalSmall } from "../../models/IAnimalSmall";
import { getAnimalById } from "../../services/animalService";
import "./AnimalDetail.scss";

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
          setError(response.error);
        }
      }
    };

    if (animal) return;

    getData();
  });

  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    setFeedingTime();
    feedAnimal();
    ToggleText();
  };

  const [symbol, setSymbol] = useState("🔴");
  const ToggleText = () => {
    let newStatus = setSymbol((state) => (state === "🟢" ? "🔴" : "🟢"));
  };

  let newTime = new Date().toLocaleString();
  const [feedStamp, setFeedStamp] = useState(newTime);
  const setFeedingTime = () => {
    let newTime = new Date().toLocaleString();
    setTimeout(newTime);
  };

  const [isFed, setIsFed] = useState(false);
  const [fedTime, setFedTime] = useState<Date | null>(null);

  useEffect(() => {
    // Check on load of component, if animal is fed
    localStorage.getItem("fedStatus");
    const storedTime = localStorage.getItem(`animal-${id}-feed-time`);
    if (storedTime === null) {
      if (animal) {
        setFeedStamp(animal.lastFed);
      }
    } else {
      setFeedStamp(storedTime);
      checkIfNeedsFood(storedTime);
    }
  }, []);

  function checkIfNeedsFood(lastFed: string) {
    const lastFedDate = new Date(lastFed);
    const rightNow = new Date();
    // TODO - Handle if day has changed too
    // tip: https://bfy.tw/TsVk
    if (lastFedDate.getHours() + 3 < rightNow.getHours()) {
      // Time to feed again
      setIsFed(false);
      setSymbol("🔴");
    } else {
      setSymbol("🟢");
      setIsFed(true);
    }
  }

  function feedAnimal() {
    setIsFed(true);
    localStorage.setItem("fedStatus", symbol);
    localStorage.setItem(`animal-${id}-feed-time`, new Date().toString()); // TODO: Same ID all the time now
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
            <p className="goBack">
              <Link to={`/`}>&#10229; Gå tillbaka</Link>
            </p>
            <div className="wrapper">
              <img src={animal?.imageUrl} alt={animal?.name} />{" "}
              <section className="animalInfo">
                <h4>
                  Matadstatus <span className="sSymbol">{symbol}</span>
                </h4>
                <h1 className="name">{animal?.name}</h1>
                <i>{animal?.latinName}</i>
                <h3 className="desc">{animal?.longDescription}</h3>
                <br />
                <h3>{animal?.name} blev senast matad</h3>
                <h4>{feedStamp}</h4>
                <button
                  className="feedBtn"
                  disabled={isFed}
                  onClick={handleClick}
                >
                  Mata
                </button>
              </section>
            </div>
          </section>
        </>
      )}
    </>
  );
};
