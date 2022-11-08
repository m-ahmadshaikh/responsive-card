import React from 'react';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';
import classes from './Home.module.css';
function Home() {
  return (
    <div className={classes.App}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
