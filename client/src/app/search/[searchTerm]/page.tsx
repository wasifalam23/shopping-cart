import Operations from '@/app/components/Operations';
import getAllProducts from '@/lib/getAllProducts';
import ProductList from '@/app/components/ProductList';

type Props = {
  params: {
    searchTerm: string;
  };
};

const SearchResults = async ({ params }: Props) => {
  const productsData: Promise<ProductData> = getAllProducts(params.searchTerm);
  const data = await productsData;
  const products = data.data.products;

  return (
    <main>
      <Operations />
      <ProductList products={products} />
    </main>
  );
};

export default SearchResults;
