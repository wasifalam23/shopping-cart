'use client';

import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import useHttp from '@/hooks/http-hook';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { uiActions } from '@/redux/slices/uiSlice';

const SignUpPage = () => {
  const { sendRequest: loginUser, isLoading } = useHttp();

  const router = useRouter();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [user]);

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid) return;

    const signedUpUserData = (data: any) => {
      if (data.status === 'success') {
        router.push('/');
        toast.success('You have successfully logged in!');
        console.log(data);
        dispatch(uiActions.setIsLoggedIn(data));
      } else if (data.status === 'fail') {
        toast.error(data.message, { duration: 3000 });
      }
    };

    const reqConfig = {
      url: 'http://localhost:8000/api/v1/users/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    loginUser(reqConfig, signedUpUserData);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 py-2">
      <form
        className="shadow-md px-6 py-4 rounded-sm"
        onSubmit={formSubmitHandler}
      >
        <h1 className="text-lg mb-4 font-semibold">
          {isLoading ? 'Processing' : 'Login'}
        </h1>

        <div className="flex flex-col">
          <input
            className="p-2 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:border-gray-600"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />

          <input
            className="p-2 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:border-gray-600"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
        </div>

        <button
          type="submit"
          className="p-2 border bg-gray-800 text-white border-gray-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full"
        >
          Login
        </button>
        <Link href="/signup" className="text-sm underline">
          Visit signup page
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
