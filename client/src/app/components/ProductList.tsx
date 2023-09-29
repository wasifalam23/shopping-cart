import ProductItem from './ProductItem';

type Props = {
  products: Product[];
};
const ProductList = (props: Props) => {
  return (
    <ul className="grid grid-cols-4 gap-8 px-8 mb-8 max-w-screen-2xl mx-auto">
      {props.products.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </ul>
  );
};
export default ProductList;
