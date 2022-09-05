import React from 'react';
import style from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div>
    <h1 className={style.message}>{message}</h1>
  </div>
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
