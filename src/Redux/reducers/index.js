import { combineReducers } from "redux";
//import reducer from "./categoryListReducer";

export const reducers = combineReducers({
    categoryList: require("../reducers/categoryListReducer").reducer
})