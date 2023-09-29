import getAllProducts from '@/lib/getAllProducts';

type SearchResultsProps = {
  params: {
    searchTerm: string;
  };
};

const SearchResults = async ({ params }: SearchResultsProps) => {
  const productData: Promise<ProductData> = getAllProducts(params.searchTerm);
  const data = await productData;

  return <div>{`${JSON.stringify(data)}`}</div>;
};

export default SearchResults;
