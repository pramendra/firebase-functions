import { google } from 'googleapis';
import { getServiceAccount } from './serviceAccount';

export const getJwtClient = () => {
  // eslint-disable-next-line import/no-dynamic-require
  const serviceAccount = getServiceAccount();
  return new google.auth.JWT({
    email: serviceAccount.client_email,
    key: serviceAccount.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
};
