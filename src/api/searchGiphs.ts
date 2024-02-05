import axios from "axios";

const searchGiphs = async(giph = 'funny') => {

    const response = await  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=0USEVbSrL2Nt3EugGolYgskoKr1Nb1CS&q=${giph}&limit=10`)
    return response.data.data
  };
  export default searchGiphs;