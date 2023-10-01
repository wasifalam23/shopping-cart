import Image from 'next/image';
import Link from 'next/link';

type Props = Product;

const ProductItem = (props: Props) => {
  return (
    <li className="shadow-md rounded-sm">
      <div className="h-80 max-xl:h-72">
        <Image
          src={props.image}
          alt={props.name}
          width={400}
          height={400}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div className="px-6 py-3 pb-6 flex items-center justify-center flex-col max-xl:px-4 max-xl:pb-4">
        <h2 className="text-xl max-xl:text-lg">{props.name}</h2>
        <p>Price: ${props.price}</p>
        <Link
          href={`/checkout/${props._id}`}
          className="bg-yellow-300  px-3 py-1 rounded-sm mt-3 text-gray-800 hover:bg-yellow-400"
        >
          Buy Now
        </Link>
      </div>
    </li>
  );
};
export default ProductItem;
