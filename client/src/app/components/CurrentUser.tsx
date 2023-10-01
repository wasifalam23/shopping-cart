'use client';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '@/redux/slices/uiSlice';

import useHttp from '@/hooks/http-hook';
import { useEffect } from 'react';

const CurrentUser = () => {
  const { sendRequest: getCurrentUser } = useHttp();

  const dispatch = useDispatch();
  const newCheckoutAdded = useSelector(
    (state: { ui: ReduxUiState }) => state.ui.newCheckoutAdded
  );

  useEffect(() => {
    const signedUpUserData = (data: any) => {
      if (data.status === 'success') {
        dispatch(uiActions.setIsLoggedIn(true));
        dispatch(uiActions.setCurrUserData(data));
      } else if (data.status === 'fail') {
        dispatch(uiActions.setIsLoggedIn(false));
        console.log(data.message);
      }
    };

    const reqConfig = {
      url: 'http://localhost:8000/api/v1/users/me',
    };

    getCurrentUser(reqConfig, signedUpUserData);
  }, [getCurrentUser, dispatch, newCheckoutAdded]);

  return <p>&nbsp;</p>;
};

export default CurrentUser;
