import styled from '@emotion/styled';
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface ITDProps {
  isGray?: boolean;
}

interface IRolesProps {
  rol?: string;
}

export const TableBodyStyled = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  background-color: #fff;
`;

export const TableRowStyled = styled.tr`
  background-color: #fff;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const TableDataStyled = styled.td<Partial<ITDProps>>`
  display: table-cell;
  vertical-align: center;
  padding: 5px 0;
  padding-left: 30px;
  background-color: ${(props) => (props.isGray ? '#fff' : '#f9f9f9')};
  &:first-of-type {
    width: 8px;
    font-size: 14px;
  }
  &:nth-of-type(2) {
    width: 600px;
  }
  &:nth-of-type(3) {
    width: 800px;
  }
  &:nth-of-type(4) {
    width: 100px;
  }
  &:nth-of-type(5) {
    width: 100px;
  }
`;

export const Actions = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit2)`
  color: #1e90ff;
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  color: #ff0000;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const ContainerNames = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Names = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
  color: #000;
  & > span {
    font-size: 12px;
    color: #5a5f6a;
  }
`;

export const ContainerRoles = styled.div`
  display: flex;
  gap: 15px;
`;

export const Roles = styled.p<Partial<IRolesProps>>`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.6px;
  color: ${(props) =>
    props.rol === 'Admin'
      ? '#000'
      : props.rol === 'User'
      ? '#000'
      : props.rol === 'Collaborator'
      ? '#000'
      : '#fff'};
  background-color: ${(props) =>
    props.rol === 'Admin'
      ? '#ffff81'
      : props.rol === 'User'
      ? '#c7f7f7'
      : props.rol === 'Collaborator'
      ? '#c0a0ce'
      : '#000'};
  padding: 5px 10px;
  border-radius: 10px;
`;
