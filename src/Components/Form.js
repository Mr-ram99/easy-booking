import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ onSubmit, type, isAdmin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  }

  return (
    <div className="form-container">
      <h2>{type}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input type="email" className="form-control" id="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input type="password" className="form-control" id="Password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        </div>
        <div>
          {type === "Login"
            ?
            <Link to='/register'>don't have an account? Register here</Link>
            :
            <Link to='/login'>already have an account? Login here</Link>
          }
        </div>
        <button type="submit" className="btn btn-primary mt-2">{type}</button>
      </form>
    </div>
  )
}
export default Form;