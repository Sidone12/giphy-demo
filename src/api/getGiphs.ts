import axios from "axios";
import type { ApiMethod } from "./types";

const getGiphs = async (method: ApiMethod, offset: number = 0, giph = "") => {
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/${method}?api_key=0USEVbSrL2Nt3EugGolYgskoKr1Nb1CS&q=${giph}&limit=10&offset=${offset}`
  );
  return response.data.data;
};
export default getGiphs;
