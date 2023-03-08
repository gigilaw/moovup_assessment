import { Link } from 'react-router-dom';

const RouteNotFound = () => {
  return (
    <div className="not-found">
      <h2>Page Not Found!</h2>
      <Link to="/">Head Back Home...</Link>
    </div>
  );
};

export default RouteNotFound;
