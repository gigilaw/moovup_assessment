import { Link } from 'react-router-dom';

const AllFriendsList = ({ allFriends }) => {
  return (
    <div className="friends-list">
      <h1>My Bear-ly Friends!</h1>

      {allFriends.map((friend) => (
        <div key={friend._id}>
          <Link to={`/friends/${friend._id}`} state={{ friend }}>
            <div className="friends-preview">
              <img
                src={friend.picture}
                alt={`${friend.name.first} ${friend.name.last}`}
              ></img>
              <div className="friends-text">
                <h2>
                  {friend.name.first} {friend.name.last}
                </h2>
                <p>See more...</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllFriendsList;
