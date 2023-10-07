import * as functions from 'firebase-functions';
import { google } from 'googleapis';
import { getJwtClient } from './utils/jwtClient';

export const addUserToUserSheet = functions.auth
  .user()
  .onCreate(async (user) => {
    const config = functions.config().env;
    const SPREADSHEET_ID = config.sheets.spreadsheet_id;
    const SHEET_NAME = 'users';
    const sheets = google.sheets('v4');
    const jwtClient = getJwtClient();

    await jwtClient.authorize();

    const { creationTime } = user.metadata;

    const values = [
      user.uid,
      user.email,
      user.emailVerified.toString(),
      user.displayName || '',
      user.phoneNumber || '',
      user.disabled.toString(),
      creationTime,
    ];

    const request = {
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [values],
      },
      auth: jwtClient,
    };

    try {
      await sheets.spreadsheets.values.append(request);
    } catch (err) {
      console.error(err);
    }
  });
