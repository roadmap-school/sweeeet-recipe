import initialRecipes from "../data/data";

const initialState = {
    listRecipes: initialRecipes,
};

const recipesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default: return state;
    }
};

export default recipesReducer;
