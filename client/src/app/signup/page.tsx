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
  const { sendRequest: signinUser, isLoading } = useHttp();

  const router = useRouter();

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.name.length > 0 &&
      user.passwordConfirm.length
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [user]);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValid) return;

    const signedUpUserData = (data: any) => {
      if (data.status === 'success') {
        router.push('/');
        toast.success('You have successfully signed in!');
        dispatch(uiActions.setIsLoggedIn(true));
      } else if (data.status === 'fail') {
        toast.error(data.message, { duration: 3000 });
      }
    };

    const reqConfig = {
      url: 'http://localhost:8000/api/v1/users/signup',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    signinUser(reqConfig, signedUpUserData);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 py-2">
      <form
        className="shadow-md px-6 py-4 rounded-sm"
        onSubmit={formSubmitHandler}
      >
        <h1 className="text-lg mb-4 font-semibold">Signup</h1>

        <div className="flex flex-col">
          <input
            className="p-2 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:border-gray-600"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="username"
          />

          <input
            className="p-2 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:border-gray-600"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />

          <input
            className="p-2 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:border-gray-600"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />

          <input
            className="p-2 border border-gray-300 rounded-sm mb-4 focus:outline-none focus:border-gray-600"
            type="password"
            value={user.passwordConfirm}
            onChange={(e) =>
              setUser({ ...user, passwordConfirm: e.target.value })
            }
            placeholder="confirm password"
          />
        </div>

        <button
          type="submit"
          className={`p-2 border ${
            isLoading
              ? 'pointer-events-none bg-gray-200 text-gray-800 border-none'
              : 'bg-gray-800 text-white border-gray-800'
          }    rounded-lg mb-4 focus:outline-none focus:border-gray-600 w-full hover:bg-gray-900`}
        >
          {isLoading ? 'Please wait...' : 'Signup'}
        </button>
        <Link href="/login" className="text-sm underline">
          Visit login page
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
