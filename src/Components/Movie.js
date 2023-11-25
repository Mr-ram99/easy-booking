import { Link } from 'react-router-dom';
import showtime from '../static/showtime.jpg';

const Movie = ({ movie }) => {
  const renderMovieInfo = (label, value) => (
    <p className="inline-block mb-2 mr-2 text-black rounded bg-slate-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-slate-300">
      {value}
    </p>
  );

  return (
    <div className="sm:w-full md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-lg shadow">
      <Link to="#">
        <img className="rounded-t-lg w-full" src={showtime} alt="movie-banner" />
      </Link>
      <div className="p-5">
        <div className="mb-4 text-2xl text-slate-700">{movie.Name}</div>
        <div className="mb-4">
          {renderMovieInfo("Genre", movie.Genre)}
          {renderMovieInfo("Format", movie.Format)}
          {renderMovieInfo("AorU", movie.AorU)}
          {renderMovieInfo("Hallname", movie.Hallname)}
          {renderMovieInfo("Showtime", movie.Showtime)}
        </div>
        <Link to='/seatSelect'
          className="inline-block text-white rounded bg-indigo-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Book
        </Link>
      </div>
    </div>
  );
};

export default Movie;