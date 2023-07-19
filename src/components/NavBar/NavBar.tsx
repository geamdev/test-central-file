'use client';
import { Search, Profile } from './components';
import { NavBarContainer } from './NavBar.styles';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Search />
      <Profile />
    </NavBarContainer>
  );
};

export default NavBar;
