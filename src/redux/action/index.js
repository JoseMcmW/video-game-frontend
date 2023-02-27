import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";

export const getVideogames = () => {
  return async function(dispatch) {
    try {
      const videoGames = await axios ("http://localhost:3001/videogames");
      return dispatch ({type: GET_ALL_VIDEOGAMES, payload: videoGames.data})
    } catch (error) {
      throw error;
    }
  }
}
