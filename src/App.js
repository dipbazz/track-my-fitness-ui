import { useSelector } from 'react-redux';
import './App.css';
import Routes from './config/Routes';
import NavbarContainer from './containers/NavbarContainer';

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="App max-w-3xl m-auto">
      {isAuthenticated ? <NavbarContainer /> : ''}
      <Routes />
    </div>
  );
}

export default App;
