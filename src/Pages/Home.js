import { useEffect, useState } from "react";
import Movie from "../Components/Movie"
import { Link } from "react-router-dom";
const Home = ({user}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    let moviesArray = window.localStorage.getItem('movies');
    if (moviesArray) {
      setMovies(JSON.parse(moviesArray));
    }
  }, [])
  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3">
        <h2>Movies</h2>
        {user.isAdmin?<Link to="/addMovie" className="btn btn-secondary">Add <i className="fa-solid fa-plus"></i></Link>:<></>}
      </div>
      <div className="movielist">
        {movies.map((movie) => <Movie key={movie.Name} movie={movie} />)}
      </div>
    </div>
  )
}
export default Home;