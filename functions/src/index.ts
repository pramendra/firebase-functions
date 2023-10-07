import * as admin from 'firebase-admin';
import { helloWorld } from './helloWorld';
import { addTestUser } from './addTestUser';
import { addUserToUserSheet } from './addUserToUserSheet';

admin.initializeApp();
export {
  //
  helloWorld,
  addTestUser,
  addUserToUserSheet,
};
