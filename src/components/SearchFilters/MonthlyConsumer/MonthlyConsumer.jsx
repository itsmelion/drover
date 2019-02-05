import React from 'react';
import SearchContainer from '../SearchContainer';
import { getQueryParams } from '../queryParams.helper';

const MonthlyConsumer = React.memo(() => (
  <SearchContainer>
    {console.log(getQueryParams())}
    <label>Hello</label>
  </SearchContainer>
));

export default MonthlyConsumer;
