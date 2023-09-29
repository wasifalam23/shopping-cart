const apiUrl = 'https://api.api-ninjas.com/v1/randomimage';
const category = 'nature';
const apiKey = 'JUAY28ZIGdRne/p0dy5LrQ==fp9pXy56CKPQb9sB';

const headers = {
  'X-Api-Key': apiKey,
  Accept: 'image/jpg',
};

const getProductImage = async () => {
  const res = await fetch(`${apiUrl}?category=${category}`, {
    headers,
  });

  if (!res.ok) throw new Error('Failed to fetch image');

  return res.text();
};

export default getProductImage;
