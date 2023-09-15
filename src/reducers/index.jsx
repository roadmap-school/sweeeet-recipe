import { combineReducers } from "redux";

// on importe les reducers à combiner : 
import recipesReducer from "./recipes";

console.log(listRecipes);

const rootReducer = combineReducers({
    // étiquette : reducer
    recipes: recipesReducer, 
});


export default rootReducer;