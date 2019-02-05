import React from 'react';
import CarList from 'components/CarList/CarList';
import MonthlyConsumer from 'components/SearchFilters/MonthlyConsumer/MonthlyConsumer';

const SearchPage = () => (
  <main id="SearchPage" row="">
    <MonthlyConsumer />
    <CarList />
  </main>
);

export default SearchPage;
