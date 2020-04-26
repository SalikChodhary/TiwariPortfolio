import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { reducer as formReducer, submit }from 'redux-form';

//__ez-react-reducer-imports__
import firstReducer from "./reducer";

const rootReducer = combineReducers({
  //__ez-react-combineReducers__
  firstReducer: firstReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));