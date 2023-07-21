import { useState, useEffect } from 'react';
import { useFetchAndLoad } from '../../../../hooks';
import { userLoginService } from '../../../../services/users.service';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/reducers/userSlice/userSlice';

const useUserLogin = () => {
  const dispatch = useDispatch();
  const { callEndpoint } = useFetchAndLoad();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const loginUser = async (email: string, password: string) => {
    try {
      if (isLoggingIn) return;
      setIsLoggingIn(true);
      const loginData = { email, password };
      const rawResponse = await callEndpoint(userLoginService(loginData));
      const response = rawResponse?.data;

      if (rawResponse?.status === 200) {
        setIsLoggedIn(true);
        setUserData(response);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    } catch (error) {
      console.log(error);
      setIsLoggedIn(false);
      setUserData(null);
    } finally {
      setIsLoggingIn(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (userData) {
          const names = userData?.name;
          const firstName = names?.split(' ')[0];
          const lastName = names?.split(' ')[1];
          console.log(userData?.profileName)
          dispatch(
            setUser({
              profileName: userData?.profileName,
              id: userData?.id,
              firstName,
              lastName,
              email: userData?.email,
            }),
          );
          console.log('User data fetched successfully');
        } else {
          console.log('Error fetching user data');
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, [dispatch, userData]);

  return { isLoggedIn, loginUser, userData };
};

export default useUserLogin;
