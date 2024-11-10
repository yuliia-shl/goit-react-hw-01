import s from './FriendListItem.module.css';

const FriendListItem = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  name = 'User Name',
  isOnline,
}) => {
  console.log(isOnline);

  return (
    <div className={s.wrapper}>
      <img src={avatar} alt="Avatar" width="48" className={s.img} />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
