import { GET_ALL_VIDEOGAMES, GET_VIDEOGAME_BY_ID, SEARCH_VIDEOGAME } from "../action/index";

const initialState = { videogames: [], videogameByID: [] };

const videogamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload
      };
    case GET_VIDEOGAME_BY_ID:
      return {
        ...state,
        videogameByID: action.payload
      };
    case SEARCH_VIDEOGAME:
      return {
        ...state,
        videogames: action.payload
      }
    default:
      return state;
  }
};

export default videogamesReducer;
