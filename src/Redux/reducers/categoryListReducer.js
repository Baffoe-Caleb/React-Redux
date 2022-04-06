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
   fetchingRandomJoke: null,
   fetchingListOfJokes: null,
   categoryList: null,
   categoryJoke: null,
   randomJoke: null,
   jokeList: null,
   errorCategoryList: null,
   errorCategoryJoke: null,
   errorRandomJoke: null,
   errorJokeList: null,
})


/* ------------- Reducers ------------- */

// request the category list from an api
export const categoryListRequest = (state) => { return { ...state, fetchingCategoryList: true, categoryList: null } }

// request the category joke from an api
export const categoryJokeRequest = (state) => { return { ...state, fetchingCategoryJoke: true, categoryJoke: null } }

//request for the random joke from an api
export const randomJokeRequest = (state) => { return { ...state, fetchingRandomJoke: true, randomJoke: null } }

//request for the list of jokes from an api using the query
export const jokeListRequest = (state) => { return { ...state, fetchingListOfJokes: true, jokeList: null } }


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
// successful api lookup for random joke
export const randomJokeSuccess = (state, action) => {
   const { randomJoke } = action
   return {
      ...state,
      fetchingRandomJoke: false,
      errorRandomJoke: null,
      randomJoke
   }
}
// successful api lookup for list of jokes
export const jokeListSuccess = (state, action) => {
   const { jokes } = action
   return {
      ...state,
      fetchingListOfJokes: false,
      errorJokeList: null,
      jokeList: jokes
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
// Something went wrong fetching random joke
export const randomJokeFailure = (state, action) => {
   const { error } = action
   return {
      ...state,
      fetchingRandomJoke: false,
      errorRandomJoke: error,
      randomJoke: null
   }
}
// Something went wrong fetching list of jokes
export const jokeListFailure = (state, action) => {
   const { error } = action
   return {
      ...state,
      fetchingListOfJokes: false,
      errorJokeList: error,
      jokeList: null
   }
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
   [CategoriesTypes.CATEGORIES_REQUEST]: categoryListRequest,
   [CategoriesTypes.RANDOM_CATEGORY_JOKE_REQUEST]: categoryJokeRequest,
   [CategoriesTypes.RANDOM_JOKE_REQUEST]: randomJokeRequest,
   [CategoriesTypes.JOKE_LIST_REQUEST]: jokeListRequest,

   [CategoriesTypes.CATEGORIES_SUCCESS]: categoriesListSuccess,
   [CategoriesTypes.RANDOM_CATEGORY_JOKE_SUCCESS]: categoryJokeSuccess,
   [CategoriesTypes.RANDOM_JOKE_SUCCESS]: randomJokeSuccess,
   [CategoriesTypes.JOKE_LIST_SUCCESS]: jokeListSuccess,

   [CategoriesTypes.CATEGORIES_FAILURE]: categoriesListFailure,
   [CategoriesTypes.RANDOM_CATEGORY_JOKE_FAILURE]: categoriesJokeFailure,
   [CategoriesTypes.RANDOM_JOKE_FAILURE]: randomJokeFailure,
   [CategoriesTypes.JOKE_LIST_FAILURE]: jokeListFailure,
})