import { createSlice } from '@reduxjs/toolkit';

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

export const signup = ({ name, lastName, email, password }) => dispatch => {
  dispatch(fetching());
  try {
    // setTimeout(() => {
    //   throw new Error('Something went wrong');
    // }, 3000);
    setTimeout(() => {
      dispatch(success({ name, lastName, email, password }));
    }, 3000);
  } catch (err) {
    dispatch(error({ message: err.message }));
  }
};

export default userSlice.reducer;