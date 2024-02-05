import axios from "axios";

const searchGiphs = async(giph: string, offset:number) => {
  if (giph.length == 0) {
    giph = "funny";
  }
  // зберегти ключ в енв
    const response = await  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=0USEVbSrL2Nt3EugGolYgskoKr1Nb1CS&q=${giph}&limit=10&offset=${offset}`)
    return response.data.data
  };
  export default searchGiphs;