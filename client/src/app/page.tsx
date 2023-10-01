import getAllProducts from '@/lib/getAllProducts';
import ProductList from './components/Products/ProductList';
import Operations from './components/Operations/Operations';
import CurrentUser from './components/utils/CurrentUser';

const Home = async () => {
  const productsData: Promise<ProductsData> = getAllProducts('');
  const data = await productsData;
  const products = data.data.products;

  return (
    <main className="max-w-screen-2xl mx-auto px-6">
      <Operations />
      <ProductList products={products} />
      <CurrentUser />
    </main>
  );
};

export default Home;
