import * as admin from 'firebase-admin';
import { getApps, initializeApp } from 'firebase-admin/app';

import serviceAccount from '../../moss-production-firebase-admin.json';

const getUser = async () => {
  if (getApps().length === 0) {
    initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    })
  }

  const user = await admin.auth().getUser('DKEnES1Z5Ufi7jdlpiDnXJOxD2o2');

  console.log(JSON.stringify(user, null, 2))

  console.info('Done!');
};

export default getUser
