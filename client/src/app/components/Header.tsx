import Link from 'next/link';
import Logout from './Logout';
import { cookies } from 'next/headers';

type Props = {};
const Header = (props: Props) => {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  return (
    <header>
      <nav className="bg-gray-800 flex px-3 py-4 text-white justify-between">
        <div className=" font-semibold text-xl">
          <Link href="/">Shopping-Cart</Link>
        </div>
        <div></div>
        <ul className="mr-6">
          <li className="flex gap-6 items-center">
            {token?.value && token?.value !== 'loggedout' && (
              <Link href="/order-history">My Orders</Link>
            )}
            {token?.value && token.value !== 'loggedout' && <Logout />}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
