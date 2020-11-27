import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signup } from '../redux/features/userSlice';
import * as Yup from 'yup';

const Signup = () => {
  const dispatch = useDispatch();
  const { fetching, error, payload } = useSelector(state => state.user);
  // console.log(payload);
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required('El nombre es obligatorio'),
          lastName: Yup.string().required('El apellido es obligatorio'),
          email: Yup.string().email('Correo invalido').required('El correo es obligatorio'),
          password: Yup.string().min(8, 'Debe de contener 8 caracteres minimo').required('La contraseña es obligatoria'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signup(values));
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">Nombre:</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
          <label htmlFor="lastName">Apellido:</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          <label htmlFor="email">Correo:</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
          <label htmlFor="password">Contraseña:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <button type="submit">Registrarse</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;