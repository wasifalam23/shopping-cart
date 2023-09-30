import { cookies } from 'next/headers';

const getProductById = async (id: string) => {
  const cookieStore = cookies();
  const token = cookieStore.get('jwt');

  const res = await fetch(`http://localhost:8000/api/v1/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
};

export default getProductById;
