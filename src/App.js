import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Routes from './config/Routes';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="max-w-3xl m-auto mb-32">
      {isAuthenticated ? <Navbar /> : ''}
      <Routes />
    </div>
  );
}

export default App;
