'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useHttp from '@/hooks/http-hook';
import toast from 'react-hot-toast';
import CheckoutForm from '@/app/components/CheckoutForm';
import BackToProdBtn from '@/app/components/BackToProdBtn';

type Props = {
  params: {
    productId: string;
  };
};

type Product = {
  name: string;
  price: number;
  image: string;
};

const backupImg =
  'https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

const CheckoutPage = ({ params }: Props) => {
  const [product, setProduct] = useState<Product>({
    name: '',
    price: 0,
    image: '',
  });

  const { sendRequest: getProductById } = useHttp();

  useEffect(() => {
    const productData = (data: any) => {
      if (data.status === 'success') {
        setProduct(data.data.product);
      } else if (data.status === 'fail') {
        toast.error(data.message, { duration: 3000 });
      }
    };

    const reqConfig = {
      url: `http://localhost:8000/api/v1/products/${params.productId}`,
    };

    getProductById(reqConfig, productData);
  }, [getProductById, params.productId]);

  return (
    <main className="max-w-7xl mx-auto mt-14 px-6">
      <BackToProdBtn className="mb-6 pl-0" />
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center rounded-sm shadow-md pb-4 pt-2 w-max px-6">
          <Image
            src={product.image ? product.image : backupImg}
            alt={product.name}
            width={500}
            height={500}
            priority
            style={{
              width: '26rem',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div className="flex flex-col mt-4 items-center">
            <p className="font-medium text-xl text-gray-800">{product.name}</p>
            <p className="font-medium text-gray-800">Price: ${product.price}</p>
          </div>
        </div>
        <div>
          <CheckoutForm productId={params.productId} />
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
