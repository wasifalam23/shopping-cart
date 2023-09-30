'use client';

import { useDispatch } from 'react-redux';
import { uiActions } from '@/redux/slices/uiSlice';
import { FormEvent, useState, useEffect } from 'react';
import useHttp from '@/hooks/http-hook';
import toast from 'react-hot-toast';

type Props = {
  productId: string;
};
const CheckoutForm = (props: Props) => {
  const { sendRequest: checkoutUser, isLoading } = useHttp();

  const [formValid, setFormValid] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    address: '',
    holderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      checkoutData.address.length > 0 &&
      checkoutData.holderName.length > 0 &&
      checkoutData.cardNumber.length > 0 &&
      checkoutData.expiryDate.length > 0 &&
      checkoutData.cvv.length > 0
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [checkoutData]);

  const resetForm = () => {
    setCheckoutData({
      address: '',
      holderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid) return;

    const checkedoutData = (data: any) => {
      if (data.status === 'success') {
        resetForm();
        toast.success('Checkout is successful!');
        dispatch(uiActions.setNewCheckout());
      } else if (data.status === 'fail') {
        toast.error(data.message, { duration: 3000 });
      }
    };

    const reqConfig = {
      url: `http://localhost:8000/api/v1/products/${props.productId}/checkout`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shippingAddress: checkoutData.address,
        paymentInfo: {
          cardHolderName: checkoutData.holderName,
          cardNumber: checkoutData.cardNumber,
          expirationDate: checkoutData.expiryDate,
          cvv: checkoutData.cvv,
        },
      }),
    };

    checkoutUser(reqConfig, checkedoutData);
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={formSubmitHandler}>
      <div className="flex flex-col gap-1">
        <label htmlFor="sh-ad">Shipping Address</label>
        <input
          type="text"
          id="sh-ad"
          value={checkoutData.address}
          onChange={(e) =>
            setCheckoutData({ ...checkoutData, address: e.target.value })
          }
          required
          placeholder="shipping address"
          className=" border rounded-sm focus:outline-none border-gray-400 px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Payment</label>
        <input
          type="text"
          value={checkoutData.holderName}
          onChange={(e) =>
            setCheckoutData({ ...checkoutData, holderName: e.target.value })
          }
          required
          placeholder="card holder name"
          className=" border rounded-sm focus:outline-none border-gray-400 px-3 py-2"
        />
        <input
          type="text"
          required
          value={checkoutData.cardNumber}
          onChange={(e) =>
            setCheckoutData({ ...checkoutData, cardNumber: e.target.value })
          }
          placeholder="card number"
          className=" border rounded-sm focus:outline-none border-gray-400 px-3 py-2"
        />
        <input
          type="date"
          required
          value={checkoutData.expiryDate}
          onChange={(e) =>
            setCheckoutData({ ...checkoutData, expiryDate: e.target.value })
          }
          placeholder="expire date"
          className=" border rounded-sm focus:outline-none border-gray-400 px-3 py-2"
        />
        <input
          type="text"
          required
          value={checkoutData.cvv}
          onChange={(e) =>
            setCheckoutData({ ...checkoutData, cvv: e.target.value })
          }
          placeholder="cvv"
          className=" border rounded-sm focus:outline-none border-gray-400 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className={`${
          isLoading
            ? 'bg-gray-200 pointer-events-none'
            : 'bg-yellow-300 hover:bg-yellow-400'
        } px-2 py-2 font-medium rounded-sm `}
      >
        {isLoading ? 'Please wait...' : 'Checkout Now'}
      </button>
    </form>
  );
};
export default CheckoutForm;
