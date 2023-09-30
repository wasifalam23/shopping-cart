'use client';

import { useRouter } from 'next/navigation';

type Props = {
  productId: string;
};

const BuyNowBtn = (props: Props) => {
  const router = useRouter();

  const btnClickHandler = () => {
    router.push(`/checkout/${props.productId}`);
  };

  return (
    <button
      onClick={btnClickHandler}
      className="bg-yellow-300 px-3 py-1 rounded-sm mt-3 text-gray-800"
    >
      Buy Now
    </button>
  );
};
export default BuyNowBtn;
