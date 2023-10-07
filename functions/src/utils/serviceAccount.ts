import * as functions from 'firebase-functions';

export const getServiceAccount = () => {
  const path = require('path');
  const config = functions.config().env;

  // eslint-disable-next-line import/no-dynamic-require
  return require(path.resolve(__dirname, `../../${config.service_account}`));
};
