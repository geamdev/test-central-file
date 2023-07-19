import {
  TableHeadStyled,
  TableHeaderStyled,
  TableRowStyled,
} from './TableHeader.styles';

const TableHeader: React.FC = () => {
  return (
    <TableHeadStyled>
      <TableRowStyled>
        <TableHeaderStyled>Id</TableHeaderStyled>
        <TableHeaderStyled>Names</TableHeaderStyled>
        <TableHeaderStyled>Status</TableHeaderStyled>
        <TableHeaderStyled>Email</TableHeaderStyled>
        <TableHeaderStyled>Roles</TableHeaderStyled>
        <TableHeaderStyled>Actions</TableHeaderStyled>
      </TableRowStyled>
    </TableHeadStyled>
  );
};

export default TableHeader;
