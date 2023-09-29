import Image from 'next/image';
import getAllProducts from '@/lib/getAllProducts';
import ProductItem from './components/ProductItem';

const Home = async () => {
  const productsData: Promise<ProductData> = getAllProducts('');
  const data = await productsData;
  const products = data.data.products;

  return (
    <main>
      <ul className="grid grid-cols-4 gap-8 px-8 my-8 max-w-screen-2xl mx-auto">
        {products.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </ul>
    </main>
  );
};

export default Home;
