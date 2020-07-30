import { initializeApp } from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FapiKey,
  authDomain: process.env.REACT_APP_FauthDomain,
  databaseURL: process.env.REACT_APP_FdatabaseURL,
  projectId: process.env.REACT_APP_FprojectId,
  storageBucket: process.env.REACT_APP_FstorageBucket,
  messagingSenderId: process.env.REACT_APP_FmessagingSenderId,
  appId: process.env.REACT_APP_FappId,
  measurementId: process.env.REACT_APP_FmeasurementId,
}

initializeApp(firebaseConfig)
