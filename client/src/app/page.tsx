import Image from 'next/image';
import getAllProducts from '@/lib/getAllProducts';
import ProductItem from './components/ProductItem';
import ProductList from './components/ProductList';
import Operations from './components/Operations';
import getCurrentUser from '@/lib/getCurrentUser';

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
