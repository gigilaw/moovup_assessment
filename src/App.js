import Home from './components/Home';
import Navbar from './components/Navbar';
import FriendDetails from './components/FriendDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouteNotFound from './components/RouteNotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    customPink: {
      main: '#f1356d',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
