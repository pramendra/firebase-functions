import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { region } from './utils/config';

export const addTestUser = functions
  .region(region)
  .https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send('Bad Request: Email and password are required');
      return;
    }

    try {
      const userRecord = await admin.auth().createUser({ email, password });
      res.status(200).send(`Successfully created new user: ${userRecord.uid}`);
    } catch (error) {
      res.status(500).send(`Error creating new user: ${error}`);
    }
  });
