const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  /* if ternario 
  Si id existe, entonces retornamos a API concatenado con ID
  En dado caso que IDO no exista trae toda la respuesta de la API */
  const apiURL = id ? `${API}${id}`: API;
  try{
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  }catch(error){
    console.error(`Fetch Error ${error}`);
  }
};
export default getData;
