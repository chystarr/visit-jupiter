import './App.css';

import HomePage from './components/HomePage';
import Attractions from './components/Attractions';
import History from './components/History';
import Visit from './components/Visit';

import { Routes, Route, Outlet, Link } from 'react-router-dom';

function Layout () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="attractions">Attractions</Link>
          </li>
          <li>
            <Link to="history">History</Link>
          </li>
          <li>
            <Link to="visit">Visit</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Project 1: Web app advertising Jupiter</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="history" element={<History />} />
          <Route path="visit" element={<Visit />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;