import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CategoriesListActions from './Redux/actions/categoryListActions';
import { useHistory } from 'react-router-dom';


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

    useEffect(() => {
        getCategoryList();

    }, [])

    useEffect(() => {
        // or   if(categoryList!==null && fetchingCategoryList===false)
        if (categoryList && !fetchingCategoryList) {
            setCategories(categoryList)
            // console.log(categoryList)
        }
        if (categoryJoke && !fetchingCategoryJoke && fetchJoke) {
            setFetchJoke(false)
            //this is where we passed the joke to the CategoryRandomJoke component as props method
            history.push({ pathname: "/categoryRandomJoke", state: { joke: categoryJoke } })
            console.log(categoryJoke)
        }
        // console.log(categoryList)
        if (randomJoke && !fetchingRandomJoke && joke) {
            setJoke(false)
            history.push({ pathname: "/randomJoke", state: { joke: randomJoke } })

        }
    }, [categoryList, fetchingCategoryList, categoryJoke, fetchingCategoryJoke, randomJoke, fetchingRandomJoke])

    const onClickHandler = (category) => {
        // alert("Hello From Chuck Norris");
        getRandomCategoryJoke(category);
        setFetchJoke(true)
        //  console.log(category)
    }

    const onRandomJokeBtnClick = (joke) => {
        // history.push({ pathname: "/RandomJoke", state: { joke: randomJoke } });
        getRandomJoke(joke);
        setJoke(true)
        console.log(randomJoke)
    }


    return (

        <div className='List'>
            <button onClick={onRandomJokeBtnClick}>Random Joke</button>
            <h3>List of Categories</h3>
            <div className="category"></div>
            {categories && categories.map((item, key) =>
                <div className="category-preview" key={key}
                >
                    {/* <Link to="/categoryRandomJoke"> */}
                    <div onClick={() => onClickHandler(item)}
                    > {item} </div>
                    {/* </Link> */}
                </div>
            )}
        </div>



    )
}

export default CategoryList