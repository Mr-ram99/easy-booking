import Movie from "../Components/Movie";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

const Home = ({ movies }) => {
  const user = useContext(UserContext);
  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3">
        <h2>Movies</h2>
        {user.isAdmin && <Link to="/addMovie" className="btn btn-secondary">Add <i className="fa-solid fa-plus"></i></Link>}
      </div>
      <div className="movielist">
        {movies.map((movie) => <Movie key={movie.Name} movie={movie} />)}
      </div>
    </div>
  )
}
export default Home;