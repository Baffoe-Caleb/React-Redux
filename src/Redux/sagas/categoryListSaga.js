import { takeLatest, put, call } from "redux-saga/effects";
import * as api from "../../api";
import CategoriesListActions from "../actions/categoryListActions";

export function* getCategoryList(action) {

    const response = yield call(api.getCategoryList)
    if (response.ok) {
        // console.log(response);
        yield put(CategoriesListActions.categoriesSuccess(response.data))
    } else {
        yield put(CategoriesListActions.categoriesFailure(response.data))
    }

}
export function* getRandomJokes(action) {

    const response = yield call(api.getRandomJokes)
    if (response.ok) {
        // console.log(response);
        yield put(CategoriesListActions.randomJokeSuccess(response.data))
    } else {
        yield put(CategoriesListActions.randomJokeFailure(response.data))
    }

}
export function* getRandomCategoryJoke(action) {
    const { category } = action

    const response = yield call(api.getRandomCategoryJoke, category)
    if (response.ok) {
        // console.log(response);
        yield put(CategoriesListActions.randomCategoryJokeSuccess(response.data))
    } else {
        yield put(CategoriesListActions.randomCategoryJokeFailure(response.data))
    }

}
export function* getListOfJoke(action) {
    const { query } = action

    const response = yield call(api.getListOfJokes, query)
    if (response.ok) {
     //   console.log(response.data.result);
        yield put(CategoriesListActions.jokeListSuccess(response.data))
    } else {
        yield put(CategoriesListActions.jokeListFailure(response.data))
    }
}
