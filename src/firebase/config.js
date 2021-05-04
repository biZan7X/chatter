import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
	apiKey: "AIzaSyDZq3Nce6yqvtAjuAz-4zN9pMqlc6znF1U",
	authDomain: "chatapp-62cb8.firebaseapp.com",
	projectId: "chatapp-62cb8",
	storageBucket: "chatapp-62cb8.appspot.com",
	messagingSenderId: "847043404503",
	appId: "1:847043404503:web:a71e3bf7d5a7a0b61ac692",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
