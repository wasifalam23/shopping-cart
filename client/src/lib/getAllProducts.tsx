import { cookies } from 'next/headers';

const getAllProducts = async (searchTerm: string, sortTerm?: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  const res = await fetch(
    process.env.NEXT_PUBLIC_NODE_URL +
      `/api/v1/products?name=${searchTerm}&sort=${sortTerm}`,
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
};

export default getAllProducts;
