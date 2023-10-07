import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  const config = functions.config();

  const SPREADSHEET_ID = config.sheets.spreadsheetid;
  const serviceAccount = require("../service-account.json");

  functions.logger.info("Hello logs!", { structuredData: true });
  response.send(
    // eslint-disable-next-line comma-dangle
    `Hello from Firebase! ${SPREADSHEET_ID} - ${serviceAccount.type}`
  );
});
