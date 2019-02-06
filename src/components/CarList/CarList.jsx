import React from 'react';
import CarItem from 'components/CarItem/CarItem';

const CarList = React.memo(({ list }) => (
  <section flex="" id="CarList">
    {list && list.map(car => <CarItem key={car.id} car={car} />)}
  </section>
));

export default CarList;
