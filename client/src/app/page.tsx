import getAllProducts from '@/lib/getAllProducts';
import ProductList from './components/ProductList';
import Operations from './components/Operations';

const Home = async () => {
  const productsData: Promise<ProductData> = getAllProducts('');
  const data = await productsData;
  const products = data.data.products;

  return (
    <main>
      <Operations />
      <ProductList products={products} />
    </main>
  );
};

export default Home;
