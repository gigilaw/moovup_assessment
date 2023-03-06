import { Link } from 'react-router-dom';

const RouteNotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not found!</h2>
      <Link to="/">Head back Home...</Link>
    </div>
  );
};

export default RouteNotFound;
