import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Friends List</h2>
      <ul className={s.list}>
        {friends.map(friend => (
          <li key={friend.id} className={s.item}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
