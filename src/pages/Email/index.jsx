import React from 'react';
import Sidebar from '../../components/Sidebar';
import classes from './Email.module.css';
import EnterEmail from '../../components/EnterEmail';
function Email() {
  return (
    <div className={classes.App}>
      <Sidebar />
      <EnterEmail />
    </div>
  );
}

export default Email;
