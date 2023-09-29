'use client';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '@/redux/slices/uiSlice';

import useHttp from '@/hooks/http-hook';
import { useEffect, useState } from 'react';

type Props = {};
function CurrentUser({}: Props) {
  const [currUser, setCurrUser] = useState('');
  const { sendRequest: getCurrentUser } = useHttp();

  const dispatch = useDispatch();

  useEffect(() => {
    const signedUpUserData = (data: any) => {
      if (data.status === 'success') {
        setCurrUser(data.data.user.name);
        dispatch(uiActions.setIsLoggedIn(data));
      } else if (data.status === 'fail') {
        console.log(data.message);
      }
    };

    const reqConfig = {
      url: 'http://localhost:8000/api/v1/users/me',
    };

    getCurrentUser(reqConfig, signedUpUserData);
  }, [getCurrentUser, dispatch]);

  return <p>&nbsp;</p>;
}

export default CurrentUser;
