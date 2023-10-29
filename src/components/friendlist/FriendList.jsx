import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span
              className={css.status}
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            >
              {isOnline}
            </span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
