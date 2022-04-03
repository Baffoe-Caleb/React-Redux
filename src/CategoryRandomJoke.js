
const CategoryRandomJoke = (props) => {
    const joke = props.location.state?props.location.state.joke: null
   
    return (
        <div>
            <h2>Random Joke from This Category</h2>
            {joke && <h3>{joke.value}</h3>
            }        </div>
    )
}

export default CategoryRandomJoke