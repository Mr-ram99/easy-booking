import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import useLocalStorage from './CustomHooks/useLocalStorage';
function App() {
  const [users, addUser] = useLocalStorage('users', []);
  const [user, setUser] = useLocalStorage('user', undefined);
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
  return (
    <div>
      <Navbar user={user} logout={setCurrentUser} />
      <div className="container">
        <main>
          <Routes>
            {user ?
              <>
                {
                  ['/', '/login', '/register'].map((path) => <Route key={path} path={path} element={<Home user={user}/>} />)
                }
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
    </div>
  );
}

export default App;
