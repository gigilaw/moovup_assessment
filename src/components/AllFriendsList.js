import { Link } from 'react-router-dom';
import { Avatar, Grid, Pagination } from '@mui/material';
import { useState } from 'react';

const AllFriendsList = ({ allFriends }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentFriends = allFriends.slice(firstPostIndex, lastPostIndex);

  const friendsCount = Math.ceil(allFriends.length / postsPerPage);

  const handlePagination = (_, currentPage) => {
    setCurrentPage(currentPage);
  };

  return (
    <div>
      <h1>My Bear-ly Friends!</h1>
      <div className="friends-list">
        {currentFriends.map((friend) => (
          <Grid container key={friend._id}>
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
      <Pagination count={friendsCount} onChange={handlePagination} />
    </div>
  );
};

export default AllFriendsList;
