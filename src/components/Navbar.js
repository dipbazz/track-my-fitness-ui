import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <p>{user.user ? user.user.email : ''}</p>
      <ul className="flex">
        <li className="p-3 text-blue-600">
          <Link to="/">Home</Link>
        </li>
        <li className="p-3 text-blue-600">
          <Link to="/measurement">Measurement</Link>
        </li>
        <li className="p-3 text-blue-600">
          <Link to="/measurement/list">Measurement list</Link>
        </li>
        <li className="p-3 text-blue-600">
          <Link to="/progress">Progress</Link>
        </li>
      </ul>
      <button type="button" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Navbar;
