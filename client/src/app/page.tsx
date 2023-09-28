import Image from 'next/image';
import getAllProducts from '@/lib/getAllProducts';

const Home = async () => {
  const productsData: ProductData = await getAllProducts();
  const products = productsData.data.products;

  return (
    <main>
      {!products && <p>went wrong</p>}
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
