import axios from "axios";
import { IApiResponse } from "../models/IApiResponse";
import { IAnimal } from "../models/IAnimal";
import { IAnimalSmall } from "../models/IAnimalSmall";

export const getAnimals = async (): Promise<IAnimalSmall[]> => {
  let response = await axios.get<IAnimalSmall[]>(
    "https://animals.azurewebsites.net/api/animals/"
  );
    console.log(response)
  return response.data;
};

export const getAnimalById = async (id: number): Promise<IApiResponse> => {
  try {
    let response = await axios.get<IAnimal>(
      "https://animals.azurewebsites.net/api/animals/" +
        id
    );

    return { animal: response.data, error: "" };
  } catch {
    return { error: "Ett fel har inträffat" };
  }
};