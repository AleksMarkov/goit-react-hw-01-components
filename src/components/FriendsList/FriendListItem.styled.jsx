import styled from '@emotion/styled';

export const FriendListitem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.75);
  background-color: white;
  gap: 20px;
  margin-bottom: 10px;
  width: 300px;
  height: 80px;
`;

export const FriendAvatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const FriendName = styled.p`
  color: dark;
  font-weight: 700;
  letter-spacing: 0.25em;
  margin: 0;
`;

export const FriendStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  color: accent;
  font-weight: 700;
  font-size: 16px;
`;

export const FriendStatusOn = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: green;
`;

export const FriendStatusOff = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
`;
