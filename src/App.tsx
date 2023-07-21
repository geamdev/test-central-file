import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';

import {
  Login,
  Register,
  NotFound,
  Dashboard,
  Profile,
  Contacts,
} from './pages';
import { NavBar } from './components';
import { User } from './interfaces';

const App = () => {
  const userData = useSelector((state: { user: User }) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const currentPath = location.pathname;
    if (isLoggedIn === 'true') {
      if (currentPath === '/login' || currentPath === '/register') {
        navigate('/');
      }
    } else if (!isLoggedIn && currentPath !== '/login') {
      if (currentPath === '/register') return;
      navigate('/login');
    }
  }, [navigate, location.pathname]);

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
        {userData.profileName === 'Admin' ? (
          <Route
            path='/'
            element={
              <>
                <NavBar />
                <Outlet />
              </>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        ) : (
          <Route
            path='/'
            element={
              <>
                <NavBar />
                <Outlet />
              </>
            }
          >
            <Route index element={<Profile />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
