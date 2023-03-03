import { Link } from 'react-router-dom';
import { Avatar, Grid } from '@mui/material';

const AllFriendsList = ({ allFriends }) => {
  return (
    <div>
      <h1>My Bear-ly Friends!</h1>
      <div className="friends-list">
        {allFriends.map((friend) => (
          <Grid container>
            <Grid item xs={12} className="friends-preview">
              <Link to={`/friends/${friend._id}`} state={{ friend }}>
                <Grid container>
                  <Grid item xs={12} sm={3}>
                    <Avatar
                      alt={`${friend.name.first} ${friend.name.last}`}
                      src={friend.picture}
                      sx={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <div>
                      <h2>
                        {friend.name.first} {friend.name.last}
                      </h2>
                      <p>See more...</p>
                    </div>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default AllFriendsList;
