import React, { useState } from 'react';
import classes from './EnterEmail.module.css';
import Modal from '../Modal';
function EnterEmail() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow((prev) => !prev);
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
      <input placeholder="REFERAL CODE" aria-label="enter referal code" />
      <button>Notify me</button>
      <p className={classes.detail_mob}>
        web 3 / sports / social / competition
      </p>
      <Modal toggleShow={toggleModal} show={show}>
        <p>Modals</p>
      </Modal>
    </div>
  );
}

export default EnterEmail;
