// export const CATEGORIES_REQUEST = "CATEGORIES_REQUEST" ;
// export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS" ;
// export function categoriesRequest() {

//    return {
//       type: CATEGORIES_REQUEST,
//    }
// }
// export function categoriesSuccess(categoryList) {
//     let payload = { categoryList}
//    return {
//       type: CATEGORIES_SUCCESS,
//       payload
//    }
// }
// different alternative 
import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    categoriesRequest: [],
    randomCategoryJokeRequest: ['category'],
    randomJokeRequest: [],

    categoriesSuccess: ['categoryList'],
    randomCategoryJokeSuccess: ['joke'],
    randomJokeSuccess: ['randomJoke'],

    categoriesFailure: ['error'],
    randomCategoryJokeFailure: ['error'],
    randomJokeFailure: ['error'],
})

export const CategoriesTypes = Types
export default Creators