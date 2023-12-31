import {
  BaseTable,
  Thead,
  Tbody,
  Td,
  Th,
  Tr,
} from '../TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <BaseTable className="transaction-history">
      <Thead>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Td>{type}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </BaseTable>
  );
};
