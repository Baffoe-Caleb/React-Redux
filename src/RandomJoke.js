
const RandomJoke = (props) => {
  const joke = props.location.state ? props.location.state.joke : null
  console.log(joke);
  return (
    <div>
      {joke && <h3>{joke.value}</h3>}
    </div>
  )
}

export default RandomJoke