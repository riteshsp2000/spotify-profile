import queryString from 'query-string';

export const getHashParams = () => {
  // eslint-disable-next-line
  return queryString.parse(location.hash);
};
