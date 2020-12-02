import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import style from '../styles/login.module.css';
import Input from '../components/form/input';
import Logo from '../components/logo';

const Login = () => {
  return (
    <section className={style.login}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string(),
          password: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <section className={style.login__titleSection}>
            <Logo style={{ order: 0 }} invertColors />
            <div className={style.login__titleSection__titlewrapper}>
              <h1>¡Inicia sesion!</h1>
            </div>
          </section>
          <section className={style.login__inputsSection}>
            <Input name="email" type="email" label="Correo" labelStyle={{ color: '#E85807' }} inputStyle={{ backgroundColor: '#E85807', color: '#fff' }} />
            <Input name="password" type="password" label="Contraseña" labelStyle={{ color: '#E85807' }} inputStyle={{ backgroundColor: '#E85807', color: '#fff' }} />
            <p>No tienes cuenta? <Link to="/signup">Registrate!</Link></p><br />
            <button type="submit">Iniciar sesion</button>
          </section>
        </Form>
      </Formik>
    </section >
  );
};

export default Login;