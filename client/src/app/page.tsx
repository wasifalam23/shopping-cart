import Image from 'next/image';
import getAllProducts from '@/lib/getAllProducts';
import Search from './components/Search';

const Home = async () => {
  const productsData: Promise<ProductData> = getAllProducts('');
  const data = await productsData;
  const products = data.data.products;

  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
