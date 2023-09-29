import Image from 'next/image';
import getAllProducts from '@/lib/getAllProducts';
import getProductImage from '@/lib/getProductImage';

const Home = async () => {
  const productsData: Promise<ProductData> = getAllProducts('');
  const data = await productsData;
  const products = data.data.products;

  return (
    <main>
      <Image
        src="https://random.imagecdn.app/300/300"
        alt="hello"
        width={100}
        height={100}
      />
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
