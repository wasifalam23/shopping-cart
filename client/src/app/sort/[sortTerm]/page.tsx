import getAllProducts from '@/lib/getAllProducts';

type Props = {
  params: {
    sortTerm: string;
  };
};

const SortResults = async ({ params }: Props) => {
  const productData: Promise<ProductData> = getAllProducts('', params.sortTerm);
  const data = await productData;

  return <div>{`${JSON.stringify(data)}`}</div>;
};

export default SortResults;
