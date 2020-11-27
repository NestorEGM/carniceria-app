import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    fetching: false,
    payload: null,
    error: null,
  },
  reducers: {
    fetching: state => {
      state.fetching = true;
      state.payload = null;
      state.error = null;
    },
    success: (state, { payload }) => {
      state.fetching = false;
      state.payload = payload;
      state.error = null;
    },
    error: (state, { payload }) => {
      state.fetching = false;
      state.payload = null;
      state.error = payload;
    },
  }
});

// Actions

const { fetching, success, error } = userSlice.actions;

export const signup = ({ firstName, lastName, email, password }) => async dispatch => {
  dispatch(fetching());
  try {
    const resp = await axios.post('http://localhost:3000/signup', {
      firstName,
      lastName,
      email,
      password,
    });
    if (resp.ok) {
      dispatch(success({ firstName, lastName, email, password }));
    } else {
      dispatch(error({ message: resp.message }));
    }
    // setTimeout(() => {
    //   throw new Error('Something went wrong');
    // }, 3000);
    // setTimeout(() => {
    //   dispatch(success({ firstName, lastName, email, password }));
    // }, 3000);
  } catch (err) {
    dispatch(error({ message: err.message }));
  }
};

export default userSlice.reducer;