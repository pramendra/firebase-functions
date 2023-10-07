import { google } from 'googleapis';

const SERVICE_ACCOUNT = require('../../service-account.json');

export const getJwtClient = () =>
  new google.auth.JWT({
    email: SERVICE_ACCOUNT.client_email,
    key: SERVICE_ACCOUNT.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
