const AllFriendsList = ({ allFriends }) => {
  return (
    <div className="friends-list">
      <h1>All Friends</h1>

      {allFriends.map((friend) => (
        <div className="friends-preview" key={friend._id}>
          <img
            src={friend.picture}
            alt={`${friend.name.first} ${friend.name.last}`}
          ></img>
          <h2>{`${friend.name.first} ${friend.name.last}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default AllFriendsList;
