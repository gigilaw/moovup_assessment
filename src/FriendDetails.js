import { useLocation } from 'react-router-dom';

const FriendDetails = () => {
  const location = useLocation();
  const { friend } = location.state;

  console.log(friend);
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
    </div>
  );
};

export default FriendDetails;
