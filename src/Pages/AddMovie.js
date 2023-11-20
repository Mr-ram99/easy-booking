import { useState } from "react"

const AddMovie = ({handleAddMovie}) => {
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const submitMovie = (e) => {
    e.preventDefault();
    handleAddMovie(values);
  }
  return (
    <form className="w-50 m-auto p-3" onSubmit={submitMovie}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter Movie Name" name="Name" onChange={handleChange} required/>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="genre">Genre</label>
        <select className="form-select" id="genre" name="Genre" onChange={handleChange} required>
          <option value="" selected disabled>Select Genre</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="scienceFiction">Science Fiction</option>
          <option value="thriller">Thriller</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="format">Format</label>
        <select className="form-select" id="format" name="Format" placeholder="Select Format" onChange={handleChange} required>
          <option value="" selected disabled>Select Format</option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="aoru-A">Certification</label>
        <div className="form-check">
          <input type="radio" className="form-check-input" id="aoru-A" name="AorU" value="A" onChange={handleChange} />
          <label htmlFor="aoru-A">A</label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" id="aoru-U" name="AorU" value="U" onChange={handleChange} />
          <label htmlFor="aoru-U">U</label>
        </div>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="hallname">Hall-Name</label>
        <select className="form-select" placeholder="Select Hall" id="hallname" name="Hallname" onChange={handleChange} required>
          <option value="" selected disabled>Select Screen Hall</option>
          <option value="Hall-1">Hall-1</option>
          <option value="Hall-2">Hall-2</option>
          <option value="Hall-3">Hall-3</option>
          <option value="Hall-4">Hall-4</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="showtime">Show Time</label>
        <input type="datetime-local" className="form-control" id="showtime" name="Showtime" placeholder="Enter Movie Time" onChange={handleChange} required/>
      </div>
      <button type="submit" className="btn btn-primary mt-2 px-4">Add</button>
    </form>
  )
}

export default AddMovie;