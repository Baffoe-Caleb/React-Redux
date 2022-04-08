import { combineReducers } from "redux";

export const reducers = combineReducers({
    categoryList: require("../reducers/categoryListReducer").reducer
})