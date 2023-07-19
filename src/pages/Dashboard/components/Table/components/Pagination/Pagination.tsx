import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import {
  ContainerPagination,
  ButtonStyled,
  ButtonText,
  ContainerButtons,
} from './Pagination.styled';

const itemsPerPage = 8;
const maxPageNumbers = 3;

interface PaginationProps {
  data: any;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  data,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const middlePage = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(currentPage - middlePage, 1);
    let endPage = startPage + maxPageNumbers - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageNumbers + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <ContainerPagination>
      <ButtonText onClick={handlePrevPage} disabled={currentPage === 1}>
        <BsArrowLeftShort /> <span>Previous</span>
      </ButtonText>
      <ContainerButtons>
        {getPageNumbers().map((pageNumber) => (
          <ButtonStyled
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </ButtonStyled>
        ))}
      </ContainerButtons>
      <ButtonText
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span>Next</span> <BsArrowRightShort />
      </ButtonText>
    </ContainerPagination>
  );
};

export default Pagination;
