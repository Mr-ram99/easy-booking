import { Link } from "react-router-dom";

const Navbar = ({ user, logout }) => {
  return (
    <nav>
      <Link to="/" className="brand">EasyBooking</Link>
      {user ? <button onClick={() => logout(undefined)} className="btn btn-danger">Logout</button> : <></>}
    </nav>
  )
}

export default Navbar;