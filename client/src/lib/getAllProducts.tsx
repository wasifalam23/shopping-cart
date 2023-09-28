const getAllProducts = async () => {
  const res = await fetch('http://localhost:8000/api/v1/products');

  if (!res.ok) throw new Error('failed to fetch data');

  return res.json();
};

export default getAllProducts;
