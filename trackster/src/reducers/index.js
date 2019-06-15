import { combineReducers } from "redux";
import documentReducer from './documentReducer';

export default combineReducers({
    documentReducer: documentReducer,
})