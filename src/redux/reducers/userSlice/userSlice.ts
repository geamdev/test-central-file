import { createSlice } from '@reduxjs/toolkit';

const getLocalStorageData = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : {};
};

const initialState = getLocalStorageData();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { profileName, firstName, lastName, email, phone, bio } = action.payload;
      state.profileName = profileName;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
      state.bio = bio;

      localStorage.setItem('user', JSON.stringify(state));
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
