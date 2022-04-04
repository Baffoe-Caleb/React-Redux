
const CategoryRandomJoke = (props) => {
    const joke = props.location.state ? props.location.state.joke : null
console.log(joke)
    return (
        <div className="joke-preview">
            {joke && <h3>{joke.value}</h3>}
        </div>
    )
}

export default CategoryRandomJoke