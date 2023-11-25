import { useState } from "react";

const AddMovie = ({ handleAddMovie }) => {
  const [values, setValues] = useState({
    Genre:"action",
    Format:"2D",
    Hallname:"Hall-1"
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitMovie = (e) => {
    e.preventDefault();
    handleAddMovie(values);
  };

  return (
    <form className="max-w-sm mx-auto mx-sm-2 my-2 rounded-lg bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]" onSubmit={submitMovie}>

      <div className="mb-4">
        <label htmlFor="moviename" className="block mb-2">Movie Name</label>
        <input
          type="text"
          className="block w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
          placeholder="Enter Movie Name"
          name="Name"
          id="moviename"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="genre" className="block mb-2">Movie Genre</label>
        <select
          className="block w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
          id="genre"
          name="Genre"
          onChange={handleChange}
          defaultValue="action"
          required
        >
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

      <div className="mb-4">
        <label htmlFor="format" className="block mb-2">Movie Format</label>
        <select
          className="block w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
          id="format"
          name="Format"
          onChange={handleChange}
          defaultValue="2D"
          required
        >
          <option value="2D">2D</option>
          <option value="3D">3D</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Certification</label>
        <div>
          <input type="radio" className="px-3" id="aoru-A" name="AorU" value="A" onChange={handleChange} />
          <label htmlFor="aoru-A" className="px-3">A</label>
          <input type="radio" className="px-3" id="aoru-U" name="AorU" value="U" onChange={handleChange} />
          <label htmlFor="aoru-U" className="px-3">U</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="hallname" className="block mb-2">Hall-Name</label>
        <select
          className="block w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
          id="hallname"
          name="Hallname"
          onChange={handleChange}
          defaultValue="Hall-1"
          required
        >
          <option value="Hall-1">Hall-1</option>
          <option value="Hall-2">Hall-2</option>
          <option value="Hall-3">Hall-3</option>
          <option value="Hall-4">Hall-4</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="showtime" className="block mb-2">Show Time</label>
        <input
          type="datetime-local"
          className="block w-full border-b-2 border-slate-200 py-[0.32rem] leading-[1.6] outline-none"
          placeholder="Enter Movie Time"
          name="Showtime"
          id="showtime"
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="inline-block rounded bg-primary w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-slate-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Save
      </button>
    </form>
  );
};

export default AddMovie;
