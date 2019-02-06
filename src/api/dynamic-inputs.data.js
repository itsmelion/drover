const inputList = {
  vehicle_type: {
    value: 'Consumer', // or PCO
    hidden: true,
  },

  vehicle_make: {
    label: 'Car Make',
  },

  vehicle_model_group: {
    label: 'Car Model',
    disabled: true,
  },

  partners_age: {},
  sub_type: {},
  number_of_weeks: {},
  location: {},
  max_distance: {},
  city_jurisdiction: {},
  price_min: {},
  price_max: {},
  body_type: {},
  tags: {},
  order_by: {},
  order_direction: {},

  transmission: {
    label: 'Gearbox',
  },

  number_of_seats_min: {
    label: 'Number of Seats MIN',
    type: 'number',
  },

  number_of_seats_max: {
    label: 'Number of Seats MAX',
    type: 'number',
  },

  fuel: {
    label: 'Fuel type',
  },

  number_of_months: {
    label: 'Duration',
  },

  year: {
    label: 'Year',
  },
};

export const inputKeys = Object.keys(inputList);
export default inputList;
