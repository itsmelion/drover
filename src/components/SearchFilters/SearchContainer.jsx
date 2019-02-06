import React from 'react';
import { container } from './SearchFilters.module.scss';


const SearchContainer = React.memo(({ children }) => (
  <section
    id="SearchContainer"
    flex="auto"
    column=""
    align="start stretch"
    className={container}
  >
    {children}
  </section>
));

export default SearchContainer;
