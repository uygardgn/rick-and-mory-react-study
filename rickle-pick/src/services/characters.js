import axios from "axios";

const getCharacters = async (adress) => {
  
  const response = await axios.get(adress);
  return response.data;
};

export default getCharacters;
