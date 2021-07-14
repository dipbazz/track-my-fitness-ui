import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
