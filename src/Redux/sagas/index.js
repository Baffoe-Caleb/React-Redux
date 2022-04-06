import { takeLatest, all } from 'redux-saga/effects'
import { getListOfJokes } from '../../api'

//import action types
import { CategoriesTypes } from '../actions/categoryListActions'

//import saga functions
import { getCategoryList, getRandomCategoryJoke, getRandomJokes } from './categoryListSaga'

export default function* rootSaga() {
    // yield takeLatest(categoriesRequest().type,getCategoryList) do this for every saga you add or the next step without the yield everytime
    yield all([
        takeLatest(CategoriesTypes.CATEGORIES_REQUEST, getCategoryList),

        takeLatest(CategoriesTypes.RANDOM_CATEGORY_JOKE_REQUEST, getRandomCategoryJoke),

        takeLatest(CategoriesTypes.RANDOM_JOKE_REQUEST, getRandomJokes),

        takeLatest(CategoriesTypes.LIST_OF_JOKES_REQUEST, getListOfJokes),

    ])
}

