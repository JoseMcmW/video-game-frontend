import videogamesReducer from "../reducer/index";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore (videogamesReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;