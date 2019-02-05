import React from 'react';
import droverLogo from 'images/logo.svg';
import style from './NavigationBar.module.scss';

const NavigationBar = React.memo(() => (
  <nav
    id="NavigationBar"
    row=""
    align="start center"
    contain=""
    className={`ph2 pv1 ${style.wrapper}`}
  >
    <img className={style.logo} src={droverLogo} alt="Drover logo" />
  </nav>
));

export default NavigationBar;
