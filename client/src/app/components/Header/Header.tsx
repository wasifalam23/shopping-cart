import CurrentUser from '../utils/CurrentUser';
import NavLinks from './NavLinks';

type Props = {};
const Header = async (props: Props) => {
  return (
    <header>
      <nav className="bg-gray-800 flex px-3 py-4 text-white justify-between">
        <div className=" font-semibold text-xl">
          <h3>Shopping-Cart</h3>
        </div>
        <NavLinks />
      </nav>
      <CurrentUser />
    </header>
  );
};

export default Header;
