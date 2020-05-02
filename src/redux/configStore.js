import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import { reducer as formReducer, submit }from 'redux-form';

//__ez-react-reducer-imports__
import firstReducer from "./reducer";

const rootReducer = combineReducers({
  //__ez-react-combineReducers__
  firstReducer: firstReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));