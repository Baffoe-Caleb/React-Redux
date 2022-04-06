import { useDispatch } from 'react-redux'
import CategoriesListActions from './Redux/actions/categoryListActions';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';






const SearchBar = ({ placeholder }) => {

    const history = useHistory();

    // redux dispatch actions
    const dispatch = useDispatch();
    const getListOfJokes = (query) => dispatch(CategoriesListActions.jokeListRequest(query))

    const [query, setQuery] = useState("")
    //  useEffect(() => console.log(query),[query])

    const onClickSearchBtn = () => {
        if (query === null || query === "") {
            return alert("Enter a random word to search");
        }
        console.log(query)
        getListOfJokes(query)
        history.push({ pathname: "/searchResults" })

    }

    return (
        <div className="search">
            <input type="text"
                placeholder="Enter a random word in a joke"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            >
            </input>
            <button type="submit" onClick={onClickSearchBtn}> Search </button>

        </div>

    )
}

export default SearchBar