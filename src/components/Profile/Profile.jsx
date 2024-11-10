// import React from 'react';
import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.user}>
          <img className={s.img} src={image} alt="User avatar" />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.userList}>
          <li className={s.listItem}>
            <span>Followers</span>
            <span className={s.bold}>{followers}</span>
          </li>
          <li className={s.listItem}>
            <span>Views</span>
            <span className={s.bold}>{views}</span>
          </li>
          <li className={s.listItem}>
            <span>Likes</span>
            <span className={s.bold}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
