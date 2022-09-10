import { combineReducers, compose, createStore } from "redux";
import counterReducer from "./feature/Counter/reducer";


let rootReducers = combineReducers({
    counter : counterReducer
});

const composeEnhancers = window. __REDUX_DEXTOOL_EXTENTION_COMPOSIT_COMPOST__ || compose;
let store = createStore(rootReducers, composeEnhancers);

export default store;