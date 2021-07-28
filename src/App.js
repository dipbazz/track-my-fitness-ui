import { useSelector } from 'react-redux';
import './App.css';
import Routes from './config/Routes';
import NavbarContainer from './containers/NavbarContainer';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
      {isAuthenticated ? <NavbarContainer /> : ''}
      <Routes />
    </div>
  );
}

export default App;
