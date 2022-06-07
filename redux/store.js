import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import AuthReducer from "./reducer";
const store = createStore(
    AuthReducer,
    applyMiddleware(thunkMiddleware)
);
export default store;