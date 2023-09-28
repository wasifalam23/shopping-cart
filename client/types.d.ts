type Product = {
  _id: string;
  name: string;
  price: string;
  image: string;
};

type ProductData = {
  status: string;
  results: number;
  data: {
    products: Product[];
  };
};
