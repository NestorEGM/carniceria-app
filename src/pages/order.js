import React, { useState } from 'react';
import Logo from '../components/logo';
import style from '../styles/order.module.css';

const OrderPage = () => {
  const [order, setOrder] = useState({
    name: '',
    phone: '',
    deliveryTime: 12,
    address: '',
  });
  const handleOrder = (value) => {
    setOrder({ ...order, ...value });
  };
  console.log(order);
  return (
    <div className={style.order}>
      {/* <Logo /> */}
      <form className={style.order__form}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={order.name} onChange={e => handleOrder({ name: e.target.value })} />
        <label htmlFor="address">Direccion:</label>
        <input type="text" id="address" name="address" value={order.address} onChange={e => handleOrder({ address: e.target.value })} />
        <label htmlFor="phone">Telefono:</label>
        <input type="text" id="phone" name="phone" value={order.phone} onChange={e => handleOrder({ phone: e.target.value })} />
        <label htmlFor="deliveryTime">Hora de entrega:</label>
        <select name="deliveryTime" id="deliveryTime" value={order.deliveryTime} onChange={e => handleOrder({ deliveryTime: e.target.value })}>
          <option value="14">2:00 p.m.</option>
          <option value="15">3:00 p.m.</option>
          <option value="16">4:00 p.m.</option>
        </select>
      </form>
    </div>
  );
};

export default OrderPage;