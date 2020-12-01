import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { signup } from '../redux/features/userSlice';
import * as Yup from 'yup';
import style from '../styles/signup.module.css';
import Logo from '../components/logo';
import Input from '../components/form/input';

const Signup = () => {
  const dispatch = useDispatch();
  // const { fetching, error, payload } = useSelector(state => state.user);
  // console.log(payload);
  return (
    <section className={style.signup}>
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
          <section className={style.signup__titleSection}>
            <Logo style={{ order: 0 }} />
            <div className={style.signup__titleSection__titlewrapper}>
              <h1>¡Registrate!</h1>
            </div>
          </section>
          <section className={style.signup__inputsSection}>
            <Input name="firstName" type="text" label="Nombre" />
            <Input name="lastName" type="text" label="Apellido" />
            <Input name="email" type="email" label="Correo" />
            <Input name="password" type="password" label="Contraseña" />
            <button style={{
              marginTop: 25,
              marginBottom: 25,
            }} type="submit">Registrarse</button>
          </section>
        </Form>
      </Formik>
    </section>
  );
};

export default Signup;