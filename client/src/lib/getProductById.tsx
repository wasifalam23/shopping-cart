const getProductById = async (id: string) => {
  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`);

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
};

export default getProductById;
