import Link from 'next/link';

type Props = {};
const Header = (props: Props) => {
  return (
    <header>
      <nav className="bg-gray-800 flex px-3 py-4 text-white justify-between">
        <div className=" font-semibold text-xl">
          <Link href="/">Shopping-Cart</Link>
        </div>
        <ul className="mr-6">
          <li>
            <Link href="/order-history">My Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
