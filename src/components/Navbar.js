import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AiOutlineBarChart, AiFillPieChart } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { FiMoreHorizontal } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="fixed z-10 bottom-0 w-full max-w-3xl bg-azure-900">
      <ul className="flex justify-center">
        <li className={`menu py-3 px-5 text-white text-center ${location.pathname === '/' && 'active'}`}>
          <Link to="/">
            <FaHome className="text-3xl m-auto" />
            <span className="hidden sm:block">Home</span>
          </Link>
        </li>
        <li className={`menu py-3 px-5 text-white text-center ${location.pathname === '/measurement' && 'active'}`}>
          <Link to="/measurement">
            <AiOutlineBarChart className="text-3xl m-auto" />
            <span className="hidden sm:block">Measurement</span>
          </Link>
        </li>
        <li className={`menu py-3 px-5 text-white text-center ${location.pathname === '/measurement/list' && 'active'}`}>
          <Link className="" to="/measurement/list">
            <GiProgression className="text-3xl m-auto" />
            <span className="hidden sm:block">Measurement list</span>
          </Link>
        </li>
        <li className={`menu py-3 px-5 text-white text-center ${location.pathname === '/progress' && 'active'}`}>
          <Link className="" to="/progress">
            <AiFillPieChart className="text-3xl m-auto" />
            <span className="hidden sm:block">Progress</span>
          </Link>
        </li>
        <li className={`menu py-3 px-5 text-white text-center ${location.pathname === '/more' && 'active'}`}>
          <Link className="" to="/more">
            <FiMoreHorizontal className="text-3xl m-auto" />
            <span className="hidden sm:block">More</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
