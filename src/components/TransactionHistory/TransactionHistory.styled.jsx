import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 50%;
  margin: auto;
  border-collapse: collapse;
  background-color: white;
  text-align: center;
  box-shadow: 1px 5px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
`;

export const Thead = styled.thead`
  color: white;
  background-color: #18abc2;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid gray;
  color: dark;
`;

export const Tbody = styled.tbody`
  color: dark;
  background-color: accent;
  text-transform: capitalize;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid gray;
  color: dark;
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: #ffffff;
  }
  &:nth-of-type(even) {
    background-color: #e5e5e5;
  }
`;
