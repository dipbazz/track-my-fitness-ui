import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AiOutlineBarChart, AiFillPieChart } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { FiMoreHorizontal } from 'react-icons/fi';

const Navbar = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed bottom-0 w-full max-w-3xl bg-azure-900">
      <p className="hidden">{user.user ? user.user.email : ''}</p>
      <ul className="flex justify-center">
        <li className="py-3 px-5 text-white text-center">
          <Link className="" to="/">
            <FaHome className="text-3xl m-auto" />
            Home
          </Link>
        </li>
        <li className="py-3 px-5 text-white text-center">
          <Link className="" to="/measurement">
            <AiOutlineBarChart className="text-3xl m-auto" />
            Measurement
          </Link>
        </li>
        <li className="py-3 px-5 text-white text-center">
          <Link className="" to="/measurement/list">
            <GiProgression className="text-3xl m-auto" />
            Measurement list
          </Link>
        </li>
        <li className="py-3 px-5 text-white text-center">
          <Link className="" to="/progress">
            <AiFillPieChart className="text-3xl m-auto" />
            Progress
          </Link>
        </li>
        <li className="py-3 px-5 text-white text-center">
          <Link className="" to="/progress">
            <FiMoreHorizontal className="text-3xl m-auto" />
            More
          </Link>
        </li>
      </ul>
      <button className="hidden" type="button" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Navbar;
