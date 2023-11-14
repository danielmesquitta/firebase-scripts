import * as admin from 'firebase-admin';
import { getApps, initializeApp } from 'firebase-admin/app';

import serviceAccount from '../../moss-production-firebase-admin.json';

const addCustomClaims = async () => {
  if (getApps().length === 0) {
    initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    })
  }

  await admin.auth().setCustomUserClaims('DKEnES1Z5Ufi7jdlpiDnXJOxD2o2', { roles: ['super_admin'] });

  console.info('Done!');
};

export default addCustomClaims
