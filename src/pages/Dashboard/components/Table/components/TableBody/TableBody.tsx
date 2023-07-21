import {
  Actions,
  DeleteIcon,
  EditIcon,
  TableBodyStyled,
  TableDataStyled,
  TableRowStyled,
  ContainerNames,
  Avatar,
  Names,
  ContainerRoles,
  Roles,
} from './TableBody.styled';

const TableBody: React.FC<TableBody> = ({ items }) => {
  return (
    <TableBodyStyled>
      {items.map((item, index) => (
        <TableRowStyled key={item.id}>
          <TableDataStyled isGray={index % 2 === 1}>{item.id}</TableDataStyled>

          <TableDataStyled isGray={index % 2 === 1}>
            <ContainerNames>
              <Avatar src='' alt={item.name} width={45} height={45} />
              <Names>
                {item.name}
                <span>@{item.name}</span>
              </Names>
            </ContainerNames>
          </TableDataStyled>

          <TableDataStyled isGray={index % 2 === 1}>
            {item.email}
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            <ContainerRoles>
              <Roles rol={item.profileName}>{item.profileName}</Roles>
            </ContainerRoles>
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            <Actions>
              <DeleteIcon />
            </Actions>
            <Actions>
              <EditIcon />
            </Actions>
          </TableDataStyled>
        </TableRowStyled>
      ))}
    </TableBodyStyled>
  );
};

export default TableBody;
