import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'my-money-3d0df.firebaseapp.com',
  projectId: 'my-money-3d0df',
  storageBucket: 'my-money-3d0df.appspot.com',
  messagingSenderId: '325620793454',
  appId: '1:325620793454:web:d130b63106d7592cc4267f',
}
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
