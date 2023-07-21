import { useState, useEffect, useRef } from 'react';
import {
  HeaderSearch,
  SearchStyle,
  SearchStyleResponsive,
  Icon,
  IconSearch,
  IconResponsive,
  TextIcon,
} from './Search.styles';
import { Card } from './components';

const contacts = [
  'maria',
  'jose',
  'pedro',
  'marcos',
  'julia',
  'juliana',
  'josefa',
  'josefina',
  'josefino',
  'josefano',
  'ana',
];

const Search = () => {
  const [showCard, setShowCard] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const filteredContactsSorted = [...filteredContacts].sort();

  const handleInputClick = () => {
    setShowCard(true);
  };
  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowCard(false);
      }
    };

    if (showCard) {
      document.addEventListener('click', handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [showCard]);

  return (
    <>
      <HeaderSearch ref={modalRef}>
        <SearchStyle>
          <TextIcon
            placeholder='Search'
            value={searchTerm}
            onChange={handleSearch}
            onClick={handleInputClick}
          />
          <Icon>
            <IconSearch />
          </Icon>
        </SearchStyle>
        <SearchStyleResponsive>
          <IconResponsive>
            <IconSearch />
          </IconResponsive>
          {showCard && (
            <SearchStyleResponsive>
              <TextIcon
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearch}
              />
            </SearchStyleResponsive>
          )}
        </SearchStyleResponsive>
      </HeaderSearch>

      {showCard && (
        <Card>
          {filteredContactsSorted.length > 0 ? (
            filteredContactsSorted
              .slice(0, 10)
              .map((result, index) => <div key={index}>{result}</div>)
          ) : (
            <div>Sin resultados</div>
          )}
        </Card>
      )}
    </>
  );
};

export default Search;
