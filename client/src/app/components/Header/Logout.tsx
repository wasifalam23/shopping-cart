'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import useHttp from '@/hooks/http-hook';
import toast from 'react-hot-toast';
import { uiActions } from '@/redux/slices/uiSlice';

const Logout = () => {
  const router = useRouter();
  const { sendRequest: logoutUser } = useHttp();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    const logoutStatus = (data: any) => {
      if (data.status === 'success') {
        router.push('/login');
        toast.success('You have successfully logged out');
        dispatch(uiActions.setIsLoggedIn(false));
      } else {
        toast.error('Something went wrong!');
      }
    };

    logoutUser(
      {
        url: 'http://localhost:8000/api/v1/users/logout',
      },
      logoutStatus
    );
  };

  return (
    <button
      className=" max-md:pb-3 pt-0 max-md:mr-auto"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};
export default Logout;
