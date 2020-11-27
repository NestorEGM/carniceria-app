import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/features/userSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const { fetching, error, payload } = useSelector(state => state.user);
  // console.log(payload);
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleUser = (value) => {
    setUser({ ...user, ...value });
  };
  return (
    <div>
      <form onSubmit={e => {
        dispatch(signup(user));
        e.preventDefault();
      }}>
        {fetching && <h1>Cargando...</h1>}
        {error && <h1>{error.message}</h1>}
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" id="name" value={user.name} onChange={e => handleUser({ name: e.target.value })} />
        <label htmlFor="lastName">Apellido:</label>
        <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={e => handleUser({ lastName: e.target.value })} />
        <label htmlFor="email">Correo:</label>
        <input type="text" name="email" id="email" value={user.email} onChange={e => handleUser({ email: e.target.value })} />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" name="password" id="password" value={user.password} onChange={e => handleUser({ password: e.target.value })} />
        <button>Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;