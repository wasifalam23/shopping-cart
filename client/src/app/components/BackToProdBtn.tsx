import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';

type Props = {
  className: string;
};
function BackToProdBtn({ className }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <ArrowLeftIcon className="w-4 h-4 text-black -mr-1" />
      <Link
        href="/"
        className="text-gray-600 px-2 py-1 rounded font-medium text-sm hover:underline"
      >
        Show All Products
      </Link>
    </div>
  );
}
export default BackToProdBtn;
