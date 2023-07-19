import { useState, useEffect } from 'react';
import { TableBody, TableHeader, Pagination } from './components';
import supabase from '../../../../supabase/client';

import {
  Container,
  ContainerTitle,
  TableStyled,
  TableTitle,
  ContainerTable,
} from './Table.styles';

const data: any = [];

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: users } = await supabase.auth.getUser();

      console.log(users);
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
