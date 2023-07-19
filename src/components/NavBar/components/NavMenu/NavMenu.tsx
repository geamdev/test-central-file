import { ContentIcon, IconOpen } from './NavMenu.styles';
import { CgProfile } from 'react-icons/cg';

const NavMenu: React.FC = () => {

  return (
    <ContentIcon>
      <IconOpen>
        <CgProfile />
      </IconOpen>
    </ContentIcon>
  );
};

export default NavMenu;
