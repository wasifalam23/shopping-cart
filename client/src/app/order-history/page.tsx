'use client';

import { useSelector } from 'react-redux';
import BackToProdBtn from '../components/BackToProdBtn';
import TableRowItem from '../components/TableRowItem';

type Props = {};
const OrderHistory = (props: Props) => {
  const user = useSelector(
    (state: { ui: ReduxUiState }) => state.ui.currUserData
  );

  const orderData = user?.data?.user.orderHistory;

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
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Shipping Address
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData &&
              orderData.map((order: OrderHistory) => {
                return (
                  <TableRowItem
                    key={order._id}
                    image={order.product.image}
                    name={order.product.name}
                    price={order.product.price}
                    address={order.shippingAddress}
                    orderedAt={order.orderedAt}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrderHistory;
