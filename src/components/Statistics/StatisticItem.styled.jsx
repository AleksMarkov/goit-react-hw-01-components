import styled from '@emotion/styled';

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2;

  background: #fff;
  border-radius: 8;
  box-shadow: 2 4px 8px rgba(0, 0, 0, 0.1);

  padding-top: 5;
  padding-right: 10;
  padding-bottom: 5;
  padding-left: 10;
`;

export const StatisticText = styled.span`
  margin-bottom: 0;

  color: gray;
  font-size: 20;
  font-weight: 300;
`;

export const StatisticCounter = styled.span`
  font-size: 8;
  font-weight: 900;
  color: accent;
`;
