import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from '../../src/reducers';
import recipesMiddleware from "../Middleware/recipesMiddleware";

const enhancers = composeWithDevTools(
    applyMiddleware(
        recipesMiddleware,
    ),
);

const store = createStore(
    reducer, 
    enhancers, 
);

export default store; 