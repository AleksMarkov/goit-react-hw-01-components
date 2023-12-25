import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json';
import transactions from '../components/data/transactions.json';

import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from '../components/FriendsList/FriendsList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div style={{ marginTop: '10px' }}></div>
      <Statistics title="Upload stats" stats={data} />
      <div style={{ marginTop: '10px' }}></div>
      <FriendList friends={friends} />
      <div style={{ marginTop: '10px' }}></div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
