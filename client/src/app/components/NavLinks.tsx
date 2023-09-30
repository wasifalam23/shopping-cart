'use client';

import { useSelector } from 'react-redux';

import Logout from './Logout';
import Link from 'next/link';

type Props = {};
const NavLinks = (props: Props) => {
  const user = useSelector((state: any) => state.ui.isLoggedIn);

  return (
    <ul className="mr-6 flex gap-6 items-center">
      {user && (
        <li>
          <Link href="/order-history">My Orders</Link>
        </li>
      )}

      {user && (
        <li>
          <Logout />
        </li>
      )}

      {user && (
        <li>
          <p className="text-yellow-300">{user?.data?.user.name}</p>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;
