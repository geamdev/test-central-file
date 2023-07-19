'use client';
import { useState } from 'react';
import {
  HeaderSearch,
  SearchStyle,
  SearchStyleResponsive,
  Icon,
  IconSearch,
  IconResponsive,
  TextIcon,
} from './Search.styles';

const Search = () => {
  const [show, setShow] = useState(false);
  const showSearch = () => {
    setShow(!show);
  };

  return (
    <HeaderSearch>
      <SearchStyle>
        <TextIcon placeholder='Search' />
        <Icon>
          <IconSearch />
        </Icon>
      </SearchStyle>
      <SearchStyleResponsive>
        <IconResponsive onClick={showSearch}>
          <IconSearch />
        </IconResponsive>
        {show && (
          <SearchStyleResponsive>
            <TextIcon placeholder='Search' />
          </SearchStyleResponsive>
        )}
      </SearchStyleResponsive>
    </HeaderSearch>
  );
};

export default Search;
