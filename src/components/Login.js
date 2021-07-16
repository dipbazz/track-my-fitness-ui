import { Link } from 'react-router-dom';
import * as api from '../utils/api';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const data = {
      user: {
        email: email.value,
        password: password.value,
      },
    };
    api.auth.login(data);
    console.log(window.localStorage.getItem('token'));
  };

  return (
    <div>
      <h1>Login!!</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your email" />
        <input type="password" name="password" placeholder="********" />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register </Link>
    </div>
  );
};

export default Login;
