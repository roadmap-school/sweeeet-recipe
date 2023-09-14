import { SAVE_RECIPES } from "../Actions/actions";

const initialState = {
    listRecipes: [],
};

const recipesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_RECIPES:
            return {
                ...state,
                listRecipes: action.recipes,
            };

        default: return state;
    }
};

export default recipesReducer;
