// import {CATEGORIES_SUCCESS, CATEGORIES_REQUEST} from "../actions/categoryListActions"

// const initialState = {
//     isLoading: false,
//     categoryList: []
//  };
//  const reducer = (state = initialState, action) => {
//      const {payload} = action
//     switch (action.type) {
//        case CATEGORIES_REQUEST:
//           return {
//              ...state,
//              isLoading: true
//           }
//        case CATEGORIES_SUCCESS:
//           return{
//              ...state,
//              categoryList: payload,
//              isLoading: false
//           }
//        default:
//           return state;
//     }
//  }
//  export default reducer;

// different approach 

import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { CategoriesTypes } from '../actions/categoryListActions'

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
   fetchingCategoryList: null,
   fetchingCategoryJoke: null,
   categoryList: null,
   categoryJoke: null,
   errorCategoryList: null,
   errorCategoryJoke: null,
})


/* ------------- Reducers ------------- */

// request the category list from an api
export const categoryListRequest = (state) => { return { ...state, fetchingCategoryList: true, categoryList: null } }

// request the category joke from an api
export const categoryJokeRequest = (state) => { return { ...state, fetchingCategoryJoke: true, categoryJoke: null } }


// successful api lookup for category list
export const categoriesListSuccess = (state, action) => {
   const { categoryList } = action
   return {
      ...state,
      fetchingCategoryList: false,
      errorCategoryList: null,
      categoryList
   }
}

// successful api lookup for category joke
export const categoryJokeSuccess = (state, action) => {
   const { joke } = action
   return {
      ...state,
      fetchingCategoryJoke: false,
      errorCategoryJoke: null,
      categoryJoke: joke
   }
}

// Something went wrong fetching category list
export const categoriesListFailure = (state, action) => {
   const { error } = action
   return {
      ...state,
      fetchingCategoryList: false,
      errorCategoryList: error,
      categoryList: null
   }
}

// Something went wrong fetching category joke
export const categoriesJokeFailure = (state, action) => {
   const { error } = action
   return {
      ...state,
      fetchingCategoryJoke: false,
      errorCategoryJoke: error,
      categoryJoke: null
   }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
   [CategoriesTypes.CATEGORIES_REQUEST]: categoryListRequest,
   [CategoriesTypes.RANDOM_CATEGORY_JOKE_REQUEST]: categoryJokeRequest,

   [CategoriesTypes.CATEGORIES_SUCCESS]: categoriesListSuccess,
   [CategoriesTypes.RANDOM_CATEGORY_JOKE_SUCCESS]: categoryJokeSuccess,

   [CategoriesTypes.CATEGORIES_FAILURE]: categoriesListFailure,
   [CategoriesTypes.RANDOM_CATEGORY_JOKE_FAILURE]: categoriesJokeFailure,
})