import { BiTargetLock } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { GrUserSettings } from 'react-icons/gr';
import { FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Heading from './layouts/Heading';

const More = ({ logout, user }) => {
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {

  }, []);

  return (
    <>
      <Heading title="More" />
      <div className="bg-white p-5 flex items-center">
        <img className="w-16 h-16 border-2 mr-5 border-azure-500 object-cover rounded-full" src={user.image || 'profile.jpg'} alt="Profile" />
        <div className="">
          <p>
            {user.email}
          </p>
          <p className="text-azure-700 text-sm">
            {user.bio || 'Six pack comming soon.'}
          </p>
        </div>
      </div>
      <ul className="list-inside">
        <li className="flex items-center p-3 shadow-sm text-gray-500">
          <BiTargetLock className="mr-3" />
          <span>Your goal</span>
        </li>
        <li className="flex items-center p-3 shadow-sm text-gray-500">
          <FaUserAlt className="mr-3" />
          <span>Your profile</span>
        </li>
        <li className="flex items-center p-3 shadow-sm text-gray-500">
          <GrUserSettings className="mr-3" />
          <span>Settings</span>
        </li>
        <li className="cursor-pointer font-semibold p-3 shadow-sm text-gray-500">
          <button type="button" className="flex items-center" onClick={handleLogout}>
            <FiLogOut className="mr-3" />
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </>
  );
};

More.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default More;
