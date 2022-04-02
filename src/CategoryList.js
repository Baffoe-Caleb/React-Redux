import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CategoriesListActions from './Redux/actions/categoryListActions';



const CategoryList = () => {
    // redux state from store
    const categoryList = useSelector((state) => state.categoryList.categoryList)
    const fetchingCategoryList = useSelector((state) => state.categoryList.fetchingCategoryList)
    const fetchingCategoryJoke = useSelector((state) => state.categoryList.fetchingCategoryJoke)
    const categoryJoke = useSelector((state) => state.categoryList.categoryJoke)

    // redux dispatch actions
    const dispatch = useDispatch();
    const getCategoryList = () => dispatch(CategoriesListActions.categoriesRequest())
    const getRandomCategoryJoke = (category) => dispatch(CategoriesListActions.randomCategoryJokeRequest(category))

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategoryList();

    }, [])

    useEffect(() => {
        // or   if(categoryList!==null && fetchingCategoryList===false)
        if (categoryList) {
            setCategories(categoryList)
        }
        console.log(categoryList)
    }, [categoryList, fetchingCategoryList])

    return (
        <div className='List'>
            <h3>List of Categories</h3>
            <div className="category-preview"></div>
            {categories && categories.map((category, key) =>
                <div key={key}>
                    {category}
                </div>
            )}
        </div>



    )
}

export default CategoryList