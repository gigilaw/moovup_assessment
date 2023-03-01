const AllFriendsList = ({ allFriends }) => {
  return (
    <div className="friends-list">
      <h1>My Bear-ly Friends</h1>

      {allFriends.map((friend) => (
        <div className="friends-preview" key={friend._id}>
          <img
            src={friend.picture}
            alt={`${friend.name.first} ${friend.name.last}`}
          ></img>
          <div className="a">
            <h2>{`${friend.name.first} ${friend.name.last}`}</h2>
            <p>See more...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllFriendsList;
