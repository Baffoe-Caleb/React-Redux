
import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    categoriesRequest: [],
    randomCategoryJokeRequest: ['category'],
    randomJokeRequest: [],
    jokeListRequest: ['query'],

    categoriesSuccess: ['categoryList'],
    randomCategoryJokeSuccess: ['joke'],
    randomJokeSuccess: ['randomJoke'],
    jokeListSuccess: ['jokes'],

    categoriesFailure: ['error'],
    randomCategoryJokeFailure: ['error'],
    randomJokeFailure: ['error'],
    jokeListFailure: ['error'],
})

export const CategoriesTypes = Types
export default Creators