import { useEffect, useState } from 'react';

const Home = () => {
  const [allFriends, setAllFriends] = useState(null);

  useEffect(() => {
    const headers = {
      Authorization: 'Bearer ' + process.env.REACT_APP_ALL_FRIENDS_TOKEN,
    };

    fetch(process.env.REACT_APP_ALL_FRIENDS_ENDPOINT, {
      headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAllFriends(data);
      });
  }, []);

  return (
    <div className="home">
      <h1>All Friends</h1>
    </div>
  );
};

export default Home;
