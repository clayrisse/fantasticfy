import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GridPage from './pages/GridPage';
import ProfilePage from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<GridPage />} />
          <Route exact path="/user/:userId" element={<ProfilePage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
