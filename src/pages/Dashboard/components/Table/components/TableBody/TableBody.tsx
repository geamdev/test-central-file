import { RxDotFilled } from 'react-icons/rx';
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
  Status,
  Roles,
  ContainerRoles,
} from './TableBody.styled';

const TableBody: React.FC<TableBody> = ({ items }) => {
  return (
    <TableBodyStyled>
      {items.map((item, index) => (
        <TableRowStyled key={item.id}>
          <TableDataStyled isGray={index % 2 === 1}>{item.id}</TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            <ContainerNames>
              <Avatar src={item.image} alt={item.name} width={45} height={45} />
              <Names>
                {item.name} {item.lastName}
                <span>@{item.username}</span>
              </Names>
            </ContainerNames>
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            <Status status={item.status}>
              <RxDotFilled />
              {item.status}
            </Status>
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            {item.email}
          </TableDataStyled>
          <TableDataStyled isGray={index % 2 === 1}>
            <ContainerRoles>
              {item.rol.map((role: string) => (
                <Roles rol={role} key={role}>
                  {role}
                </Roles>
              ))}
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
