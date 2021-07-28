import PropTypes from 'prop-types';

const Navbar = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <button type="button" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Navbar;
