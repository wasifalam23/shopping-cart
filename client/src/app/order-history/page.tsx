'use client';

import { useSelector } from 'react-redux';
import Image from 'next/image';
import BackToProdBtn from '../components/BackToProdBtn';

type Props = {};
const OrderHistory = (props: Props) => {
  const user = useSelector((state: any) => state.ui.currUserData);

  const userData = user?.data?.user.orderHistory;

  return (
    <main className="max-w-7xl mx-auto mt-16 mb-10">
      <BackToProdBtn className="mb-6" />
      <h3 className="mb-8 font-semibold text-lg">My Order History</h3>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Shipping Address
              </th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map((user: any) => {
                return (
                  <tr className="bg-white border-b" key={user._id}>
                    <td className=" p-4">
                      <Image
                        src={user.product.image}
                        alt={user.product.name}
                        width={500}
                        height={500}
                        priority
                        style={{
                          width: '6rem',
                          height: '6rem',
                          objectFit: 'cover',
                        }}
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {user.product.name}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      ${user.product.price}
                    </td>

                    <td className="px-6 py-4">{user.shippingAddress}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrderHistory;
