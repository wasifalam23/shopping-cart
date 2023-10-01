'use client';

import { Navbar } from 'flowbite-react';
import { useSelector } from 'react-redux';
import Logout from './Logout';
import CurrentUser from '../utils/CurrentUser';
import Link from 'next/link';

export default function Header() {
  const user = useSelector(
    (state: { ui: ReduxUiState }) => state.ui.currUserData
  );
  const isLoggedIn = useSelector(
    (state: { ui: ReduxUiState }) => state.ui.isLoggedIn
  );

  return (
    <>
      <Navbar className="bg-gray-800 py-4">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Shipping-Cart
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 ">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-white ml-auto">
          {isLoggedIn && (
            <Link href="/" className="max-md:pb-5">
              <p className="text-white border-none">Home</p>
            </Link>
          )}

          {isLoggedIn && (
            <Link className="text-white max-md:pb-5" href="/order-history">
              My Orders
            </Link>
          )}

          {isLoggedIn && <Logout />}

          {isLoggedIn && (
            <p className="text-yellow-300 justify-end max-md:hidden">
              Hi, {user?.data?.user.name}
            </p>
          )}
        </Navbar.Collapse>
      </Navbar>
      <CurrentUser />
    </>
  );
}
