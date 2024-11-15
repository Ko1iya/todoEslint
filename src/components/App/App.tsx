import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './App.module.scss';
import iconpng from '@/assets/myPNG.png';
import Iconsvg from '@/assets/mySvg.svg';

function App() {
  const [count, setCount] = useState<number>(0);

  function upCount() {
    setCount(count + 1);
  }

  return (
    <div className={styles.count}>
      {count}
      <button type="button" className={styles.button} onClick={upCount}>
        <span>ЖМИ</span>
      </button>
      <img width="100px" height="100px" src={iconpng} alt="" />
      <Iconsvg fill="red" width={50} height={50} />
      <Link to="about">about</Link>
      <Link to="shop">shop</Link>
      <Link to="contact">contact</Link>

      <h1>s</h1>
      <Outlet />
    </div>
  );
}

export default App;
