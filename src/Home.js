import useFetch from './useFetch';
import { useMemo } from 'react';
import AllFriendsList from './AllFriendsList';

const Home = () => {
  const headers = useMemo(
    () => ({
      authorization: `Bearer ${process.env.REACT_APP_ALL_FRIENDS_TOKEN}`,
    }),
    []
  );

  const {
    data: allFriends,
    isLoading,
    error,
  } = useFetch(process.env.REACT_APP_ALL_FRIENDS_ENDPOINT, headers);

  return (
    <div className="home">
      {error && <div>An error seems to have occured</div>}
      {isLoading && <div>Loading...</div>}
      {allFriends && <AllFriendsList allFriends={allFriends} />}
    </div>
  );
};

export default Home;
