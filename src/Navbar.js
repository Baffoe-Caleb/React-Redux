import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>The ChuckNorris Jokes</h1>
      <div className="links">
        <Link to="/"
          style={{
            color: 'white',
            backgroundColor: "orangered",
            borderRadius: '8px'
          }}
        >Home</Link>
        {/* <Link to="/random"
          style={{
            color: 'white',
            backgroundColor: "orange",
            borderRadius: '8px'
          }}
        >Random Joke</Link> */}
      </div>
    </nav>
  )
}

export default Navbar