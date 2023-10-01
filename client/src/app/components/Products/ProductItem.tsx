import Image from 'next/image';
import Link from 'next/link';

type Props = Product;

const ProductItem = (props: Props) => {
  return (
    <li className="shadow-md rounded-sm">
      <Image
        src={props.image}
        alt={props.name}
        width={400}
        height={400}
        priority
        style={{
          width: '100%',
          height: '20rem',
          objectFit: 'cover',
        }}
      />

      <div className="px-6 py-3 pb-6 flex items-center justify-center flex-col">
        <h2 className="text-xl">{props.name}</h2>
        <p>Price: ${props.price}</p>
        <Link
          href={`/checkout/${props._id}`}
          className="bg-yellow-300 px-3 py-1 rounded-sm mt-3 text-gray-800 hover:bg-yellow-400"
        >
          Buy Now
        </Link>
      </div>
    </li>
  );
};
export default ProductItem;