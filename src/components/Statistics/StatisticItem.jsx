import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from '../Statistics/StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox>
      <StatisticText>{label}</StatisticText>
      <StatisticCounter>{percentage}</StatisticCounter>
    </StatisticBox>
  );
};
