import useFetch from './useFetch';
import { useMemo } from 'react';

const Home = () => {
  const headers = useMemo(
    () => ({
      authorization: `Bearer ${process.env.REACT_APP_ALL_FRIENDS_TOKEN}`,
    }),
    []
  );

  const { data, isLoading, error } = useFetch(
    process.env.REACT_APP_ALL_FRIENDS_ENDPOINT,
    headers
  );

  return (
    <div className="home">
      <h1>All Friends</h1>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
