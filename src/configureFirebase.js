import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD3BBABRF2XVEKXhdoxnOLnrVe8IwRQmQw",
    authDomain: "watchlist-maker.firebaseapp.com",
    databaseURL: "https://watchlist-maker.firebaseio.com",
    projectId: "watchlist-maker",
    storageBucket: "watchlist-maker.appspot.com",
    messagingSenderId: "965477794402"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;