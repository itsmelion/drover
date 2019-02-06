import React from 'react';
import style from './CarItem.module.scss';

const getPrice = (table) => {
  if (table[1].subtotal_price_pounds) return parseInt(table[1].subtotal_price_pounds, 10);
  return parseInt(table[1].driver_price_pounds_after_discount_including_insurance, 10);
};

const CarItem = React.memo(({ car }) => (
  <li
    column=""
    align="between"
    className={style.item}
    style={{ backgroundImage: `url(${car.stock_image && car.stock_image.main_image_url})` }}
  >
    <div className="right">
      <h3>£{getPrice(car.price_discount_and_deposit_schedule_hash)}</h3>
      <sub className={style.period}>A month</sub>
    </div>

    <div>
      <h6 className={style.carYear}>{car.year} {car.vehicle_make}</h6>
      <h4>{car.vehicle_model} - {car.engine_size_information}</h4>
    </div>
  </li>
));

export default CarItem;
