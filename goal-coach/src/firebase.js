import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA5FoiyKi7v8U3XHfDMKf1HDijJ_Lyf9lc",
    authDomain: "goal-coach-cd605.firebaseapp.com",
    databaseURL: "https://goal-coach-cd605.firebaseio.com",
    projectId: "goal-coach-cd605",
    storageBucket: "goal-coach-cd605.appspot.com",
    messagingSenderId: "201762970612"
};

export const firebaseApp = firebase.initializeApp(config);