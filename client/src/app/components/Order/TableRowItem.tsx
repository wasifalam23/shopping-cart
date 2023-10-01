import Image from 'next/image';
import moment from 'moment';

type Props = {
  image: string;
  name: string;
  price: number;
  address: string;
  orderedAt: string;
};
const TableRowItem = (props: Props) => {
  const orderedDate = moment(props.orderedAt).format('Do MMM YYYY');

  console.log(props.image);

  return (
    <tr className="bg-white border-b">
      <td className=" p-4">
        <Image
          src={props.image}
          alt={props.name}
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
      <td className="px-6 py-4 font-semibold text-gray-900">{props.name}</td>

      <td className="px-6 py-4 font-semibold text-gray-900">${props.price}</td>

      <td className="px-6 py-4 font-semibold text-gray-900">{orderedDate}</td>

      <td className="px-6 py-4">{props.address}</td>
    </tr>
  );
};
export default TableRowItem;
