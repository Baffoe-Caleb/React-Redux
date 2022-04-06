import SearchBar from "./SearchBar"
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"



const SearchResults = () => {
  // fetch from redux state
  const jokeList = useSelector((state) => state.categoryList.jokeList)
  const fetchingListOfJokes = useSelector((state) => state.categoryList.fetchingListOfJokes)

  const [jokeResults, setJokeResults] = useState({});

  useEffect(() => {
    if (jokeList && !fetchingListOfJokes) {
      setJokeResults(jokeList)
    }
  }, [jokeList, fetchingListOfJokes])


  const onClickHandler = () => {

  }
  const resultsArray = jokeResults ? jokeResults.result : []
  console.log(resultsArray);
  
  return (
    <div>
      <SearchBar />
      <h2>Results</h2>
      <div className="category"></div>
      {resultsArray && resultsArray?.map((item, key) =>
        <div className="category-preview" key={key}
        >
          <div onClick={() => onClickHandler(item.value)}
          > {item.value} </div>
        </div>
      )}

    </div>
  )
}

export default SearchResults