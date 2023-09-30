import getAllProducts from '@/lib/getAllProducts';
import ProductList from './components/ProductList';
import Operations from './components/Operations';

const Home = async () => {
  const productsData: Promise<ProductData> = getAllProducts('');
  const data = await productsData;
  const products = data.data.products;

  return (
    <main className="max-w-screen-2xl mx-auto px-8">
      <Operations />
      <ProductList products={products} />
    </main>
  );
};

export default Home;
