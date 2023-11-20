import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AddMovie from './Pages/AddMovie';
import useLocalStorage from './CustomHooks/useLocalStorage';
import { createContext } from 'react';
export const UserContext = createContext();

function App() {
  const [users, addUser] = useLocalStorage('users', []);
  const [user, setUser] = useLocalStorage('user', undefined);
  const [movies, setMovies] = useLocalStorage('movies', []);
  const navigate = useNavigate();
  const createUser = (newUser) => {
    addUser([...users, newUser]);
    window.alert('Registered');
    navigate("/");
  }
  const setCurrentUser = (credentials) => {
    setUser(credentials);
    navigate("/");
  }
  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    navigate("/");
  }

  return (
    <UserContext.Provider value={user} >
      <Navbar user={user} logout={setCurrentUser} />
      <div className="container">
        <main>
          <Routes>
            {user ?
              <>
                {
                  ['/', '/login', '/register'].map((path) => <Route key={path} path={path} element={<Home movies={movies} />} />)
                }
                <Route path='/addMovie' element={<AddMovie handleAddMovie={handleAddMovie} />} />
              </>
              :
              <>
                <Route path='/' element={<Login setCurrentUser={setCurrentUser} />} />
                <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
                <Route path='/register' element={<Register createUser={createUser} />} />
              </>
            }
          </Routes>
        </main>
      </div>
    </UserContext.Provider >
  );
}

export default App;
