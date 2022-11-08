import React from 'react';
import Backdrop from '../Backdrop';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import points from '../assets/points.png';
/* eslint-disable react/prop-types */
function Modal({ toggleShow, show = false }) {
  return ReactDOM.createPortal(
    <div className={show ? classes.active : ''}>
      <Backdrop show={show} toggleShow={toggleShow} />
      <div className={classes.modal}>
        <button onClick={toggleShow} className={classes.top_btn}>
          x
        </button>
        <h1>
          Congrats! you are currently in <span>Spot#3</span> on the waitlist
        </h1>
        <p>Complete these taks to move up on the waitlist for early assess</p>
        <hr></hr>
        <div className={classes.section}>
          <div className={classes.left}>
            <ul>
              <li>Verified referal code signup(+250pts)</li>
              <li>Follow our Twitter Account(50pts)</li>
              <li>Share your refferal link with a Tweet</li>
              <li>
                Tweet a picture with your Chips&Sauce and use the hashtag
                #secretsauce 250pts
              </li>
            </ul>
          </div>
          <div className={classes.right}>
            <img src={points} alt="" />
          </div>
        </div>
        <hr />
        <div className={classes.footer}>
          <input placeholder="ENTER REFERRAL CODE" />
          <button>SHARE ON TWITTER</button>
        </div>
        <p className={classes.last_p}>
          Ask your friend to join the watchlist using the referral code and you
          will get additional points
        </p>
      </div>
    </div>,

    document.getElementById('portal')
  );
}

export default Modal;
