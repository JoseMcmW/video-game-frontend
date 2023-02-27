import {GET_ALL_VIDEOGAMES} from "../action/index";

const initialState = { videogames: [] };

const videogamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return { ...state, videogames: action.payload };

    default:
      return state;
  }
};

export default videogamesReducer;