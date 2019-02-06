import React from 'react';

const ModeSwitcher = React.memo(({ mode, switcher }) => (
  <article id="ModeSwitcher" row="nowrap">
    <button
      className={`button ${mode === 'Consumer'}`}
      type="button"
      onClick={() => switcher('Consumer')}
    >
      Consumer
    </button>

    <button
      className={`button ${mode === 'PCO'}`}
      type="button"
      onClick={() => switcher('PCO')}
    >
      Private-Hire
    </button>
  </article>
));

export default ModeSwitcher;
