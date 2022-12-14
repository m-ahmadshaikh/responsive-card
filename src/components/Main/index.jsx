import React, { useState } from 'react';
import classes from './Main.module.css';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Main() {
  const [show, setShow] = useState(false);
  const [input, setinput] = useState('');
  const navigate = useNavigate();
  const toggleModal = () => {
    setShow((prev) => !prev);
  };
  const changeHandler = (e) => {
    setinput(e.target.value);
  };

  const onSubmit = () => {
    navigate('/email');
  };
  return (
    <div className={classes.main}>
      <div className={classes.headings}>
        <h1>Coming </h1>
        <h1>Soon </h1>
      </div>
      <div className={classes.sub_headings}>
        <p className={classes.sub}>What&apos;s your secret sauce?</p>
        <p className={classes.detail}>web 3 / sports / social / competition</p>
      </div>
      <input placeholder="ENTER EMAIL" aria-label="enter email" />
      <div className={classes.items}>
        <input
          onChange={changeHandler}
          placeholder="REFERAL CODE"
          aria-label="enter referal code"
        />
        <button onClick={input === '' ? toggleModal : onSubmit}>
          Notify me
        </button>
      </div>
      <p className={classes.detail_mob}>
        web 3 / sports / social / competition
      </p>
      <Modal toggleShow={toggleModal} show={show}>
        <p>Modals</p>
      </Modal>
    </div>
  );
}
Main.defaultProps = {
  onSubmit: '',
};

Main.prototype = {
  onSubmit: PropTypes.func,
};
export default Main;
