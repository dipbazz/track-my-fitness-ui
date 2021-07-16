import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <h1>Login!!</h1>
    <input type="text" name="username" placeholder="your email" />
    <input type="password" name="password" placeholder="********" />
    <button type="button">Login</button>
    <Link to="/register">Register </Link>
  </div>
);

export default Login;
