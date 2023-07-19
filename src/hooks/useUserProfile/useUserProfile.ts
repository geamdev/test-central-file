// useUserData.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/userSlice/userSlice';
import supabase from '../../supabase/client';

const useUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (data) {
          const { user } = data;
          const names = user?.user_metadata.names;
          const firstName = names?.split(' ')[0];
          const lastName = names?.split(' ')[1];
          dispatch(
            setUser({
              firstName,
              lastName,
              email: user?.email,
              phone: user?.user_metadata.phone,
            }),
          );
        } else {
          console.log('Error fetching user data:', error);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, [dispatch]);
};

export default useUserData;
