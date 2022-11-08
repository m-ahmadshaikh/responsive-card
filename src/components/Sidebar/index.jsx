import React, { useEffect, useState } from 'react';
import classes from './Sidebar.module.css';
import sideImg from '../assets/side-img.png';
import mobImg from '../assets/side-mob.png';
function Sidebar() {
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 800px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 800px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.main_img}>
        <img src={matches ? mobImg : sideImg} alt="" />
      </div>
    </div>
  );
}

export default Sidebar;
