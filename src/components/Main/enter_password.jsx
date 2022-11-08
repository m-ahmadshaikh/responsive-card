import React from 'react';
import classes from './Main.module.css';
function EnterPassword() {
  return (
    <div className={classes.main}>
      <div className={classes.headings}>
        <h1>Enter </h1>
        <h1>Password </h1>
      </div>
      <div className={classes.items}>
        <input placeholder="PASSWORD" aria-label="enter password" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default EnterPassword;
