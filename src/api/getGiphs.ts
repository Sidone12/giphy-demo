import axios from "axios";

const getGiphs = async (offset: number = 0) => {
  const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=0USEVbSrL2Nt3EugGolYgskoKr1Nb1CS&limit=10&offset=${offset}`)
  return response.data.data
  };
  export default getGiphs;