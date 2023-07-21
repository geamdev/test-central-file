import { useState, useEffect, useRef } from 'react';
import { Card } from './components';
import { useDataContact } from './hook';
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
  const { contacts } = useDataContact();
  const [showCard, setShowCard] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const filteredContactsSorted = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

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
              .map((result) => <div key={result.id}>{result.name}</div>)
          ) : (
            <div>Sin resultados</div>
          )}
        </Card>
      )}
    </>
  );
};

export default Search;
