import { Link } from 'react-router-dom';
import Heading from './layouts/Heading';

const Home = () => (
  <>
    <Heading title="Home" />
    <div className="flex flex-col justify-center items-center mt-10">
      <p>Track your every day exercise progress and get in shape.</p>
      <Link to="/measurement" className="mt-5 px-5 py-3 bg-green-400 rounded text-white">
        Add your measurements
      </Link>
    </div>
  </>
);

export default Home;
