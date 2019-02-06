import axios from 'axios';
import { keyBy } from 'lodash';
import { parseIntegers } from './transform.utilities';
import dynamicInputData, { inputKeys } from './dynamic-inputs.data';

const endpoint = 'https://app.joindrover.com/api/web/vehicles';

/**
  * @function search
  * @description Serve as a multipurpose search for vehicles.
*/
export const search = (body, opt) => axios
  .post(endpoint, parseIntegers(body), opt)
  .then(({ data }) => data)
  .catch(() => new Error('Failed searching veicles'));

/**
  * @param apiRequest Object
  * @description Serve as initial state for the search components
*/
export const apiRequest = keyBy(inputKeys);
inputKeys.forEach((key) => {
  apiRequest[key] = (dynamicInputData[key] && dynamicInputData[key].value);
});
