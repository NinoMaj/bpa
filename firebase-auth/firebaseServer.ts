import * as admin from 'firebase-admin';
import 'firebase/auth';

export default !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(
        require('../secrets/firebaseServerConfig.json')
      ),
      databaseURL: 'https://bpa-firebase.firebaseio.com',
    })
  : admin.app();
