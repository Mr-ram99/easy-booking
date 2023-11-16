import Form from "../Components/Form"

const Register = ({ createUser }) => {
  const ValidateRegister = ({ email, password }) => {
    createUser({ email, password });
  }

  return (
    <Form onSubmit={ValidateRegister} type="Register" />
  )
}
export default Register;