import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className="item">
            <span
              className="status"
              style={{ beckgraundColor: isOnline ? 'green' : 'red' }}
            >
              {isOnline}
            </span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequered,
//       name: PropTypes.string.isRequered,
//       isOnline: PropTypes.bool.isRequered,
//     })
//   ),
// };
