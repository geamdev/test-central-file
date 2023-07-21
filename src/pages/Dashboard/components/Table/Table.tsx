import { useState, useEffect } from 'react';
import { TableBody, TableHeader, Pagination } from './components';
import { useUser } from './hook';

import {
  Container,
  ContainerTitle,
  TableStyled,
  TableTitle,
  ContainerTable,
} from './Table.styles';

const Table: React.FC = () => {

  const { users: data } = useUser();

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    const fetchUser = async () => {

    };
    fetchUser();
  }, []);


  return (
    <Container>
      <ContainerTitle>
        <TableTitle>
          Team members <span>{data.length} data</span>
        </TableTitle>
      </ContainerTitle>

      <ContainerTable>
        <TableStyled>
          <TableHeader />
          <TableBody items={currentItems} />
        </TableStyled>
      </ContainerTable>
      <Pagination
        data={data}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Table;
