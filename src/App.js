import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Routes from './config/Routes';

function App() {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
