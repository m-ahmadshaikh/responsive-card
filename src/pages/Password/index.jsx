import React from 'react';
import EnterPassword from '../../components/EnterPassword/enter_password';
import Sidebar from '../../components/Sidebar';
import classes from './Password.module.css';
function Password() {
  return (
    <div className={classes.App}>
      <Sidebar />
      <EnterPassword />
    </div>
  );
}

export default Password;
