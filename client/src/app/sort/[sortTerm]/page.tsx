import getAllProducts from '@/lib/getAllProducts';
import Operations from '@/app/components/Operations/Operations';
import ProductList from '@/app/components/Products/ProductList';
import BackToProdBtn from '@/app/components/utils/BackToProdBtn';

type Props = {
  params: {
    sortTerm: string;
  };
};

const SortResults = async ({ params }: Props) => {
  const productsData: Promise<ProductsData> = getAllProducts(
    '',
    params.sortTerm
  );
  const data = await productsData;
  const products = data.data.products;

  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <Operations />
      <BackToProdBtn className="mb-4" />
      <ProductList products={products} />
    </main>
  );
};

export default SortResults;
