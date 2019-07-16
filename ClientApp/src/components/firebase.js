import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBmigAJlnYDSumYY03dsNiZsKM1Mwo3N6U',
  authDomain: 'fun-food-friends-40ea4.firebaseapp.com',
  databaseURL: 'https://fun-food-friends-40ea4.firebaseio.com',
  projectId: 'fun-food-friends-40ea4',
  storageBucket: '',
  messagingSenderId: '862876839667',
  appId: '1:862876839667:web:6687f106a12a4cb8'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
