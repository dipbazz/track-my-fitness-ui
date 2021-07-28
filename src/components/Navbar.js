import PropTypes from 'prop-types';

const Navbar = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <p>{user.user ? user.user.email : ''}</p>
      <button type="button" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Navbar;
