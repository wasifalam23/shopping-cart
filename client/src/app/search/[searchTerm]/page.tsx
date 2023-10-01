import Operations from '@/app/components/Operations/Operations';
import getAllProducts from '@/lib/getAllProducts';
import ProductList from '@/app/components/Products/ProductList';
import BackToProdBtn from '@/app/components/utils/BackToProdBtn';

type Props = {
  params: {
    searchTerm: string;
  };
};

const SearchResults = async ({ params }: Props) => {
  const productsData: Promise<ProductsData> = getAllProducts(params.searchTerm);
  const data = await productsData;
  const products = data.data.products;

  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <Operations />
      <BackToProdBtn className="mb-4" />
      {products.length === 0 ? (
        <p className="text-center mt-6 text-xl">😞 No result found!</p>
      ) : (
        <ProductList products={products} />
      )}
    </main>
  );
};

export default SearchResults;
