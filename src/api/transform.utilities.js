import { pickBy, has } from 'lodash';

/**
  * @function clearKeys
  * @description Clear empty, null and undefined keys
*/
export const clearKeys = obj => pickBy(obj, i => i && i !== null);

/**
 * @function parseIntegers
 * @description
 * Transforms specific body keys to INTEGER
 * especially when they come from Query 'strings'
 */
export const parseIntegers = (body, keys) => {
  const request = clearKeys(body);

  const integerEntries = keys || [
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
    if (has(request, entry)) request[entry] = +(request[entry]);
  });

  return request;
};
