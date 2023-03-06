import { useLocation, useNavigate } from 'react-router-dom';
import Map from './Map';
import { useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';

const FriendDetails = () => {
  const propsLocation = useLocation();
  const [friend, setFriend] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });
  const navigate = useNavigate();

  // Extra checking due to limiations of json
  useEffect(() => {
    if (propsLocation.state) {
      const { friend } = propsLocation.state;
      setFriend(friend);
    }
  }, [propsLocation.state]);

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
      return (
        <img
          src="/locationError.png"
          alt="location error"
          className="map-container"
        />
      );
    }
    return isLoaded ? <Map locationParams={friend.location} /> : 'Loading...';
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <img
            src={friend.picture}
            alt={`${friend.name.first} ${friend.name.last}`}
            className="friend-profile"
          ></img>
        </Grid>
        <Grid item xs={12} sm={9}>
          <h2>
            {friend.name.first} {friend.name.last}
          </h2>
          <div>
            <p>email: {friend.email}</p>
          </div>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={9}>
        <div className="map-div">{locationDisplay()}</div>
        {/* <Link to={'/'}> */}
        <Button variant="outlined" color="customPink" onClick={handleBack}>
          Back
        </Button>
        {/* </Link> */}
      </Grid>
    </div>
  );
};

export default FriendDetails;
