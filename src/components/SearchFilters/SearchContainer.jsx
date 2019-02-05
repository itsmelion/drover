import React from 'react';
import { container } from './SearchFilters.module.scss';


const SearchContainer = React.memo(({ children }) => (
  <section flex="auto" id="SearchContainer" className={container}>
    {children}
  </section>
));

export default SearchContainer;
