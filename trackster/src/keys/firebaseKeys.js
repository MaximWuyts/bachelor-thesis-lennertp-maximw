import { apiKey, authDomain, databaseURL, projectId, storageBucket, appId } from 'react-native-dotenv';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    projectId: projectId,
    storageBucket: storageBucket,
    appId: appId
}

const fire = !firebase.apps.length && firebase.initializeApp(config);
const db = fire.database();

export { fire, db }