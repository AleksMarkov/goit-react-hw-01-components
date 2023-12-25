import { FriendListItem } from '../FriendsList/FriendListItem';
import { FriendBox } from '../FriendsList/FriendsList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendBox>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendBox>
  );
};
