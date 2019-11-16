import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseClientConfig } from '../secrets/firebaseClientConfig';

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseClientConfig)
  : firebase.app();
