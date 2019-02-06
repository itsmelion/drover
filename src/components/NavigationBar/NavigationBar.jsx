import React from 'react';
import droverLogo from 'images/logo.svg';
import style from './NavigationBar.module.scss';

const NavigationBar = (
  <div id="NavigationBar" className={style.wrapper}>
    <nav
      className="ph2 pv1"
      contain=""
      row=""
      align="start center"
    >
      <img className={style.logo} src={droverLogo} alt="Drover logo" />
    </nav>
  </div>
);

export default NavigationBar;
