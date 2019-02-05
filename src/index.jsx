import React from 'react';
import { render } from 'react-dom';
import 'main.scss';

import SearchPage from 'components/SearchPage/SearchPage';
import NavigationBar from 'components/NavigationBar/NavigationBar';

render(
  <>
    <NavigationBar />
    <SearchPage />
  </>,
  document.getElementById('root'),
);
