import {
  FriendListitem,
  FriendStatusOn,
  FriendStatusOff,
  FriendAvatar,
  FriendName,
} from '../FriendsList/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListitem>
      {isOnline ? <FriendStatusOn /> : <FriendStatusOff />}
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendListitem>
  );
};
