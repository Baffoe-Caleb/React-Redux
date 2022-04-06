import SearchBar from "./SearchBar"
import { useSelector, useDispatch } from 'react-redux'
import CategoriesListActions from './Redux/actions/categoryListActions';

import { useEffect, useState } from "react"



const SearchResults = () => {
  // fetch from redux state
  const jokeList = useSelector((state) => state.categoryList.jokeList)
  const fetchingListOfJokes = useSelector((state) => state.categoryList.fetchingListOfJokes)


  const [jokeResults, setJokeResults] = useState([]);

  useEffect(() => {
    if (jokeList && !fetchingListOfJokes) {
      setJokeResults(jokeList)
    }
    //console.log(jokeList)
  }, [jokeList, fetchingListOfJokes, jokeResults])


  const onClickHandler = () => {

  }
  const resultsArray = jokeResults ? jokeResults.result : []
  // console.log(resultsArray);


  return (
    <div>
      <SearchBar />
      <h2>Results </h2>
      <div className="category"></div>
      {resultsArray && resultsArray?.map((item, key) =>
        <div className="jokeResults-preview" key={key}
        >
          <div onClick={() => onClickHandler(item.value)}
          > {item.value.slice(0, 100)}... </div>
        </div>
      )}

    </div>
  )
}

export default SearchResults