import getAllProducts from '@/lib/getAllProducts';
import Operations from '@/app/components/Operations';
import ProductList from '@/app/components/ProductList';

type Props = {
  params: {
    sortTerm: string;
  };
};

const SortResults = async ({ params }: Props) => {
  const productsData: Promise<ProductData> = getAllProducts(
    '',
    params.sortTerm
  );
  const data = await productsData;
  const products = data.data.products;

  return (
    <main>
      <Operations />
      <ProductList products={products} />
    </main>
  );
};

export default SortResults;
