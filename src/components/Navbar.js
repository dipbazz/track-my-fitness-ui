import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <p>{user.user ? user.user.email : ''}</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/measurement">Measurement</Link>
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
