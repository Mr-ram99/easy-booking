import { Link } from 'react-router-dom';
import showtime from '../static/showtime.jpg'
const Movie = ({ movie }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={showtime} alt="Theatre-Hall" />
      <div className="card-body">
        <h5 className="card-title">{movie.Name}</h5>
        <div className="movie-details">
          <p className="btn-info">{movie.Genre}</p>
          <p className="btn-info">{movie.Format}</p>
          <p className="btn-info">{movie.AorU}</p>
          <p className="btn-info">{movie.Hallname}</p>
          <p className="btn-info">{movie.Showtime}</p>
        </div>
        <Link to="/BookingHall" className="btn btn-primary">Book Now</Link>
      </div>
    </div>
  )
}
export default Movie;