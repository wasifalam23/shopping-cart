const getAllProducts = async (searchTerm: string, sortTerm?: string) => {
  const res = await fetch(
    `http://localhost:8000/api/v1/products?name=${searchTerm}&sort=${sortTerm}`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
};

export default getAllProducts;
