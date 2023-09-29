import Operations from '@/app/components/Operations';
import getAllProducts from '@/lib/getAllProducts';

type SearchResultsProps = {
  params: {
    searchTerm: string;
  };
};

const SearchResults = async ({ params }: SearchResultsProps) => {
  const productData: Promise<ProductData> = getAllProducts(params.searchTerm);
  const data = await productData;

  return (
    <main>
      <Operations />
      {`${JSON.stringify(data)}`}
    </main>
  );
};

export default SearchResults;
