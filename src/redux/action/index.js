import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_VIDEOGAME_BY_ID = "GET_VIDEOGAME_BY_ID";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";

export const getVideogames = () => {
  return async function(dispatch) {
    try {
      const { data: videoGames} = await axios ("http://localhost:3001/videogames");
      return dispatch ({type: GET_ALL_VIDEOGAMES, payload: videoGames})
    } catch (error) {
      throw error;
    }
  }
};

export const getVideogameById = (id) => {
  return async function(dispatch) {
    const { data: videogameById } = await axios(`http://localhost:3001/detail-game/${id}`)
    return dispatch({ type: GET_VIDEOGAME_BY_ID, payload: videogameById })
  }
};

export const searchVideogame = (name) => {
  return async function(dispatch) {
    const { data: searchByName } = await axios(`http://localhost:3001/videogames?name=${name}`)
    return dispatch({ type: SEARCH_VIDEOGAME, payload: searchByName })
  }
}
