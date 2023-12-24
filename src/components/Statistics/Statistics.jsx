import { StatisticItem } from '../Statistics/StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
