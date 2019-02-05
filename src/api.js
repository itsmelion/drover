import { keyBy } from 'lodash';

export const apiParams = [
  'vehicle_type',
  'vehicle_make',
  'vehicle_model_group',
  'partners_age',
  'transmission',
  'sub_type',
  'number_of_weeks',
  'number_of_months',
  'location',
  'max_distance',
  'city_jurisdiction',
  'price_min',
  'price_max',
  'year',
  'fuel',
  'body_type',
  'number_of_seats_min',
  'number_of_seats_max',
  'tags',
  'order_by',
  'order_direction',
];

export const apiSetup = keyBy(apiParams);

apiParams.forEach((param) => {
  apiSetup[param] = { type: 'text', value: '' };
});

apiSetup.vehicle_type = {
  type: 'text',
  value: 'Consumer', // PCO
  hidden: true,
};
