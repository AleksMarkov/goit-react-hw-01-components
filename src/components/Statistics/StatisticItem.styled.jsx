import styled from '@emotion/styled';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const StatisticBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${getRandomColor};
  width: 60px;
  height: 60px;
`;

export const StatisticText = styled.span`
  margin-bottom: 5px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export const StatisticCounter = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
