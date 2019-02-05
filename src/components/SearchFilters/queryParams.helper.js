import { keyBy } from 'lodash';

export const getQueryParams = () => {
  const query = window.location.search.substring(1).split('&');

  let params = query.map(i => i.split('='));
  params = keyBy(params, i => decodeURI(i[0]));

  for (const key in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(key)) {
      params[key] = decodeURI(params[key][1]);
    }
  }

  if (params[Object.keys(params)[0]] === 'undefined') return null;

  return params;
};

export const getQueryParam = (parameter) => {
  const query = window.location.search.substring(1);
  const params = query.split('&');
  const result = params.map((item) => {
    const pair = item.split('=');
    if (pair[0] === parameter) return pair[1];
    return false;
  });

  let param;

  result.forEach((res) => {
    if (res) param = res;
  });

  return param;
};
