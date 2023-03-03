import Home from './components/Home';
import Navbar from './components/Navbar';
import FriendDetails from './components/FriendDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteNotFound from './components/RouteNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/friends/:id" element={<FriendDetails />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
