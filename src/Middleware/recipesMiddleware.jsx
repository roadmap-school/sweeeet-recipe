import { FETCH_RECIPES, saveRecipes } from "../Actions/actions";
import axios from "axios";

const recipesMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            axios.get('http://localhost:3001/recipes')
                .then((response) => {
                    store.dispatch(saveRecipes(response.data));
                })
                .catch((error) => {
                    console.warn(error);
                })
            next(action);
            break;

        default:
            next(action);
    }
}

export default recipesMiddleware;