import { useLocation } from 'react-router-dom';
import Map from './Map';
import { useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const FriendDetails = () => {
  const propsLocation = useLocation();
  const [friend, setFriend] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  // Extra checking due to limiations of json
  useEffect(() => {
    if (propsLocation.state) {
      const { friend } = propsLocation.state;
      setFriend(friend);
    }
  }, [propsLocation.state]);

  // remove
  console.log(friend);

  // Early return if friend data is not populated
  if (!friend) {
    return <h2>Friend Not Found</h2>;
  }

  const locationDisplay = () => {
    try {
      if (!friend.location.latitude || !friend.location.longitude) {
        throw new Error('location info missing');
      }
    } catch (err) {
      console.warn(err.message);
      // replace with error display
      return 'error';
    }
    return isLoaded ? <Map locationParams={friend.location} /> : 'Loading...';
  };

  return (
    <div className="friend-details">
      <article>
        <img
          src={friend.picture}
          alt={`${friend.name.first} ${friend.name.last}`}
        ></img>
        <h2>
          {friend.name.first} {friend.name.last}
        </h2>
        <div>
          <p>email: {friend.email}</p>
        </div>
      </article>
      <div>{locationDisplay()}</div>
    </div>
  );
};

export default FriendDetails;
