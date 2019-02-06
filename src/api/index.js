import axios from 'axios';
import { keyBy } from 'lodash';
import { parseIntegers } from './transform.utilities';
import dynamicInputData, { inputKeys } from './dynamic-inputs.data';

const endpoint = 'https://app.joindrover.com/api/web/vehicles';

export const search = (body, opt) => axios
  .post(endpoint, parseIntegers(body), opt)
  .then(({ data }) => data)
  .catch(() => new Error('Failed searching veicles'));

export const apiRequest = keyBy(inputKeys);

inputKeys.forEach((key) => {
  apiRequest[key] = (dynamicInputData[key] && dynamicInputData[key].value);
});
