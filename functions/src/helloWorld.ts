import * as functions from 'firebase-functions';
import { getServiceAccount } from './utils/serviceAccount';

export const helloWorld = functions.https.onRequest((request, response) => {
  const config = functions.config().env;
  const SPREADSHEET_ID = config.sheets.spreadsheet_id;
  const serviceAccount = getServiceAccount();

  functions.logger.info(
    'Hello logs!',
    `${SPREADSHEET_ID} - ${serviceAccount.type}`,
    { structuredData: true }
  );
  response.send(`Hello from Firebase!`);
});
