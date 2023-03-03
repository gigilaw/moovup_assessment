import Home from './Home';
import Navbar from './Navbar';
import FriendDetails from './FriendDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteNotFound from './RouteNotFound';

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
