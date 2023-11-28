import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import useLocalStorage from './CustomHooks/useLocalStorage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AddMovie from './Pages/AddMovie';
import SeatSelect from './Pages/SeatSelect';
import Payment from './Pages/Payment';
import default_movies from './static/movies_array';
import { createContext, useEffect } from 'react';

export const UserContext = createContext();

function App() {
  const [storedUsers, setStoredUsers] = useLocalStorage('users', []);
  const [currentUser, setCurrentUser] = useLocalStorage('user', undefined);
  const [storedMovies, setStoredMovies] = useLocalStorage('movies', []);
  const navigate = useNavigate();

  useEffect(()=>{
    setStoredMovies(default_movies);
  },[]);

  const registerUser = (newUser) => {
    setStoredUsers([...storedUsers, newUser]);
    window.alert('Registered');
    navigate("/");
  };

  const loginUser = (credentials) => {
    setCurrentUser(credentials);
    navigate("/");
  };

  const addMovie = (movie) => {
    setStoredMovies([...storedMovies, movie]);
    navigate("/");
  };

  return (
    <UserContext.Provider value={currentUser}>
      <Navbar user={currentUser} logout={() => loginUser(undefined)} />
      <div className="bg-slate-100 mb-10">
        <main className="px-3">
          <Routes>
            <Route
              path="/"
              element={
                currentUser ? (
                  <Home movies={storedMovies} />
                ) : (
                  <Login setCurrentUser={loginUser} />
                )
              }
              index
            />
            <Route
              path="/seatSelect/:id"
              element={
                currentUser ? (
                  <SeatSelect />
                ) : (
                  <Login setCurrentUser={loginUser} />
                )
              }
            />
            <Route
              path="/payment/:id"
              element={
                currentUser ? (
                  <Payment />
                ) : (
                  <Login setCurrentUser={loginUser} />
                )
              }
            />
            <Route
              path="/login"
              element={<Login setCurrentUser={loginUser} />}
            />
            <Route
              path="/register"
              element={<Register createUser={registerUser} />}
            />
            {currentUser && (
              <Route
                path="/addMovie"
                element={<AddMovie handleAddMovie={addMovie} />}
              />
            )}
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
