type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

type ProductsData = {
  status: string;
  results: number;
  data: {
    products: Product[];
  };
};

type ProductData = {
  status: string;
  results: number;
  data: {
    product: Product;
  };
};

type OrderHistory = {
  _id: string;
  user: string;
  product: Product;
  shippingAddress: string;
  orderedAt: string;
};

type CurrentUser = {
  status: string;
  data: {
    user: {
      _id: string;
      name: string;
      email: string;
      __v: number;
      orderHistory: OrderHistory[];
      id: string;
    };
  };
};

type ReduxUiState = {
  isLoggedIn: boolean;
  currUserData: CurrentUser;
  newCheckoutAdded: boolean;
};
