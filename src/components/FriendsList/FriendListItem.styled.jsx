import styled from '@emotion/styled';

export const FriendListitem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 100px 10px 10px;

  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.75);
  background-color: white;
  gap: 40px;
  margin-bottom: 10px;
`;

export const FriendAvatar = styled.img`
  width: 60px;
`;

export const FriendName = styled.p`
  color: dark;
  font-weight: 700;

  letter-spacing: 0.25;
  margin-left: 2;
`;

export const FriendStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 1;
  color: accent;
  font-weight: 700;
  font-size: 6;
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
