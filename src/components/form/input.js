import React from 'react';
import { useField } from 'formik';
import style from '../../styles/form/input.module.css';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={style.label} htmlFor={props.id || props.name}>{label}</label>
      <input className={style.input} style={{
        marginBottom: meta.error ? 0 : 10,
      }} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={style.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default Input;