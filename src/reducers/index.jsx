import { combineReducers } from "redux";

// on importe les reducers à combiner : 
import recipesReducer from "./recipes";

const rootReducer = combineReducers({
    // étiquette : reducer
    recipes: recipesReducer, 
});


export default rootReducer;