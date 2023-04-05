import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable
} from 'firebase/storage';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_APP_ID}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);
export const storageReference = ref;
export const downloadUrl = getDownloadURL;
export const uploadFile = uploadBytes;
export const uploadBytesResum = uploadBytesResumable;

export default storage;


  