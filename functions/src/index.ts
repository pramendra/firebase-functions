import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { addTestUser } from './addTestUser';
import { addUserToUserSheet } from './addUserToUserSheet';

export const helloWorld = functions.https.onRequest((request, response) => {
  const config = functions.config();

  const SPREADSHEET_ID = config.sheets.spreadsheetid;
  const serviceAccount = require('../service-account.json');

  functions.logger.info('Hello logs!', { structuredData: true });
  response.send(
    `Hello from Firebase! ${SPREADSHEET_ID} - ${serviceAccount.type}`
  );
});
admin.initializeApp();

export {
  //
  addTestUser,
  addUserToUserSheet,
};
