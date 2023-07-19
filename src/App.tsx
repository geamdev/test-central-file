import { useEffect } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';

import supabase from './supabase/client';
import { Login, Register, NotFound, Dashboard, Profile } from './pages';
import { NavBar } from './components';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        if (location.pathname === '/register') return;
        navigate('/login');
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
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
          <Route path='/contacts' element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
