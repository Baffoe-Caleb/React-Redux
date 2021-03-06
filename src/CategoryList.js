import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CategoriesListActions from './Redux/actions/categoryListActions';
import { useHistory } from 'react-router-dom';
import Loading from './Loading';

const CategoryList = () => {
    const history = useHistory();

    // redux state from store
    const categoryList = useSelector((state) => state.categoryList.categoryList)
    const fetchingCategoryList = useSelector((state) => state.categoryList.fetchingCategoryList)
    const fetchingCategoryJoke = useSelector((state) => state.categoryList.fetchingCategoryJoke)
    const categoryJoke = useSelector((state) => state.categoryList.categoryJoke)
    const randomJoke = useSelector((state) => state.categoryList.randomJoke)
    const fetchingRandomJoke = useSelector((state) => state.categoryList.fetchingRandomJoke)

    // redux dispatch actions
    const dispatch = useDispatch();
    const getCategoryList = () => dispatch(CategoriesListActions.categoriesRequest())
    const getRandomCategoryJoke = (category) => dispatch(CategoriesListActions.randomCategoryJokeRequest(category))
    const getRandomJoke = () => dispatch(CategoriesListActions.randomJokeRequest())

    const [fetchJoke, setFetchJoke] = useState(false);
    const [categories, setCategories] = useState([]);
    const [joke, setJoke] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategoryList();

    }, [])

    useEffect(() => {
        let loading = fetchingCategoryList
        setLoading(loading)
        if (categoryList && !fetchingCategoryList) {
            setCategories(categoryList)
        }
        if (categoryJoke && !fetchingCategoryJoke && fetchJoke) {
            setFetchJoke(false)
            history.push({ pathname: "/categoryRandomJoke", state: { joke: categoryJoke } })
        }
        if (randomJoke && !fetchingRandomJoke && joke) {
            setJoke(false)
            history.push({ pathname: "/randomJoke", state: { joke: randomJoke } })

        }
    }, [categoryList, fetchingCategoryList, categoryJoke, fetchingCategoryJoke, randomJoke, fetchingRandomJoke])

    const onClickHandler = (category) => {
        getRandomCategoryJoke(category);
        setFetchJoke(true)
    }

    const onRandomJokeBtnClick = (joke) => {
        getRandomJoke(joke);
        setJoke(true)
    }

    return (

        <div className='List'>
            <button onClick={onRandomJokeBtnClick}>Random Joke</button>
            <h3>List of Categories</h3>
            <div className="category"></div>
            {loading && <Loading />}
            {(categories && !loading) && categories.map((item, key) =>
                <div className="category-preview" key={key}>
                    <div onClick={() => onClickHandler(item)}>
                        {item}
                    </div>
                </div>
            )}
        </div>



    )
}

export default CategoryList