import Operations from '@/app/components/Operations/Operations';
import getAllProducts from '@/lib/getAllProducts';
import ProductList from '@/app/components/Products/ProductList';
import BackToProdBtn from '@/app/components/utils/BackToProdBtn';

type Props = {
  params: {
    searchTerm: string;
  };
};

const resultText = (text: string) => (
  <p className="text-center my-6 text-lg">{text}</p>
);

const SearchResults = async ({ params }: Props) => {
  const productsData: Promise<ProductsData> = getAllProducts(params.searchTerm);
  const data = await productsData;
  const products = data.data.products;

  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <Operations />
      <BackToProdBtn className="mb-4" />
      {products.length === 0 ? (
        resultText('😞 No result found!')
      ) : (
        <div>
          {resultText(
            `🧐 ${data.results} ${
              data.results > 1 ? 'results' : 'result'
            } found`
          )}
          <ProductList products={products} />
        </div>
      )}
    </main>
  );
};

export default SearchResults;
