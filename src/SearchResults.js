import SearchBar from "./SearchBar"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Pagination from 'rc-pagination';
import localeInfo from './locale/en_US'
import Loading from "./Loading";

const SearchResults = () => {
  // fetch from redux state
  const jokeList = useSelector((state) => state.categoryList.jokeList)
  const fetchingListOfJokes = useSelector((state) => state.categoryList.fetchingListOfJokes)

  const [jokeResults, setJokeResults] = useState({});
  const [state, setState] = useState({
    pageLimit: 10,
    currentPage: 1,
    total: 0,
    resultsArray: [],
    offset: 0
  });
  const [paginatedResult, setPaginatedResult] = useState([]);
  const [loadingResults, setLoadingResults] = useState(true);

  useEffect(() => {
    let loadingResults = fetchingListOfJokes
    setLoadingResults(loadingResults)

    if (jokeList && !fetchingListOfJokes) {
      setJokeResults(jokeList)
      setState((state) => { return { ...state, total: jokeList.total, resultsArray: jokeList.result } })
    }
    if (state.resultsArray.length > 0) {
      const currentJokes = state.resultsArray.slice(state.offset, state.pageLimit);
      setPaginatedResult(currentJokes)
    }
  }, [jokeList, fetchingListOfJokes, jokeResults])

  const onClickHandler = () => {
    console.log("clicked")
  }

  const showPagination = (state.total > state.pageLimit) ? true : false

  const onPageChange = (page) => {
    console.log(page)
    const offset = (page - 1) * state.pageLimit;
    const newJokesPage = state.resultsArray.slice(offset, offset + state.pageLimit);
    setPaginatedResult(newJokesPage);
  }
  return (
    <div>
      <SearchBar />
      <h2>Results </h2>
      <div className="category"></div>
      {loadingResults && <Loading />}
      {(paginatedResult.length > 0 && !loadingResults) && paginatedResult?.map((item, key) =>
        <div className="jokeResults-preview" key={key}>
          <Link to={`/JokeDetails/${item.id}`}>
            <div onClick={() => onClickHandler(item.value)}>
              {item.value.slice(0, 60)}...
            </div>
          </Link>
        </div>
      )}
      {(showPagination && !loadingResults) &&
        <div className="pagination">
          <li>
            <Pagination
              showTotal={(total, range) =>
                `${range[0]} - ${range[1]} of ${total} items`
              }
              total={state.total}
              onChange={onPageChange}
              locale={localeInfo}
            />
          </li>
        </div>
      }
    </div>
  )
}

export default SearchResults