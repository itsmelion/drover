import { keyBy, pickBy, has } from 'lodash';
import axios from 'axios';

const endpoint = 'https://app.joindrover.com/api/web/vehicles';

const transformBody = (body) => {
  const request = pickBy(body, i => i && i !== null);
  const parseInteger = entry => +(entry);

  const integerEntries = [
    'subscription_start_days',
    'number_of_weeks',
    'number_of_months',
    'max_distance',
    'price_min',
    'price_max',
    'year',
    'number_of_seats_min',
    'number_of_seats_max',
    'seats_min',
    'seats_max',
    'owner_id',
    'per_page',
    'page',
  ];


  integerEntries.forEach((entry) => {
    if (has(request, entry)) request[entry] = parseInteger(request[entry]);
  });

  return request;
};

export const search = (body, opt) => axios
  .post(endpoint, transformBody(body), opt)
  .then(({ data }) => data)
  .catch(() => new Error('Failed searching veicles'));

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
export const apiRequest = keyBy(apiParams);

apiParams.forEach((param) => {
  apiSetup[param] = { type: 'text', value: '' };
  apiRequest[param] = apiSetup[param].value || '';
});

apiRequest.vehicle_type = 'Consumer';

apiSetup.vehicle_type = {
  value: 'Consumer', // PCO
  hidden: true,
};

apiSetup.vehicle_make = {
  label: 'Car Make',
};

apiSetup.vehicle_model_group = {
  label: 'Car Model',
  disabled: true,
};

apiSetup.transmission = {
  label: 'Gearbox',
};

apiSetup.number_of_seats_min = {
  label: 'Number of Seats MIN',
  type: 'number',
};
apiSetup.number_of_seats_max = {
  label: 'Number of Seats MAX',
  type: 'number',
};

apiSetup.fuel = {
  label: 'Fuel type',
};

apiSetup.number_of_months = {
  label: 'Duration',
};

apiSetup.year = {
  label: 'Year',
};
