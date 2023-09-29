'use client';
import { useRouter } from 'next/navigation';
import useHttp from '@/hooks/http-hook';
import toast from 'react-hot-toast';

type Props = {};
const Logout = (props: Props) => {
  const router = useRouter();
  const { sendRequest: logoutUser } = useHttp();

  const logoutHandler = () => {
    const logoutStatus = (data: any) => {
      if (data.status === 'success') {
        router.push('/login');
        toast.success('You have successfully logged out');
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

  return <button onClick={logoutHandler}>Logout</button>;
};
export default Logout;
