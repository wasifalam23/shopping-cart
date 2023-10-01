'use client';

import { useSelector } from 'react-redux';

import Logout from './Logout';
import Link from 'next/link';

type Props = {};
const NavLinks = (props: Props) => {
  const user = useSelector(
    (state: { ui: ReduxUiState }) => state.ui.currUserData
  );
  const isLoggedIn = useSelector(
    (state: { ui: ReduxUiState }) => state.ui.isLoggedIn
  );

  return (
    <ul className="mr-6 flex gap-6 items-center">
      {isLoggedIn && (
        <li>
          <Link href="/order-history">My Orders</Link>
        </li>
      )}

      {isLoggedIn && (
        <li>
          <Logout />
        </li>
      )}

      {isLoggedIn && (
        <li>
          <p className="text-yellow-300">Hi, {user?.data?.user.name}</p>
        </li>
      )}
    </ul>
  );
};
export default NavLinks;
