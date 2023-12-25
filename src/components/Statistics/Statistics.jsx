import { StatisticItem } from '../Statistics/StatisticItem';
import {
  StatisticTitle,
  StatisticsList,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </section>
  );
};
