import Link from 'next/link';
import { cookies } from 'next/headers';
import CurrentUser from './CurrentUser';
import NavLinks from './NavLinks';

type Props = {};
const Header = async (props: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  return (
    <header>
      <nav className="bg-gray-800 flex px-3 py-4 text-white justify-between">
        <div className=" font-semibold text-xl">
          <Link href="/">Shopping-Cart</Link>
        </div>

        <NavLinks />
      </nav>
      <CurrentUser />
    </header>
  );
};

export default Header;
