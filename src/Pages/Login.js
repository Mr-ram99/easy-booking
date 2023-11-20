import Form from "../Components/Form";

const Login = ({ setCurrentUser }) => {
  const validateUser = ({ email, password }) => {
    const adminEmail = process.env.REACT_APP_ADMIN_EMAIL;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (email === adminEmail && password === adminPassword) {
      setCurrentUser({ email, password, isAdmin: true });
    }
    else {
      const users = JSON.parse(window.localStorage.getItem('users'));
      const user = users.filter((user) => user.email === email && user.password === password)[0]
      if (user) {
        setCurrentUser({ email, password, isAdmin: false });
      }
    }
  }
  return (
    <Form onSubmit={validateUser} type="Login" />
  )
}
export default Login;