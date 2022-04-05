
const SearchBar = ({ placeholder }) => {

    return (
        <div className="search">
            <input type="text"
                placeholder="Enter a random word in a joke">

            </input> 
            <button type="submit"> Search </button>

        </div>

    )
}

export default SearchBar